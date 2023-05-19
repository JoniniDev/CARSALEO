import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


export const InputFilter = ({ className, contextmin, contextmax, placeholderText, onValue, validedValue, activity, validate }) => {
    const [value, setValue] = useState()

    const setFiled = ({ target }) => {
        let { value, min, max } = target
        value = Math.max(Number(min), Math.min(Number(max), Number(value)))
        setValue(value)
    }

    useEffect(() => {
        setValue(validedValue)
    }, [validedValue])

    useEffect(() => {
        setValue()
    }, [activity])

    return (
        <ParentDiv className={className}>
            <Input
                type="number"
                onChange={setFiled}
                onBlur={() => { onValue(value) }}
                value={value || ""}
                min={Math.min(Number(contextmin || 0), Number(contextmin || 0)) || ""}
                max={Math.max(Number(contextmax || 10000000000), Number(contextmax || 10000000000)) || ""}
                placeholder={placeholderText} />
        </ParentDiv>
    )
}

const ParentDiv = styled.div`
    width: 100%;
`

export const Input = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid;
    border-radius: 2px;
    background: none;
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    outline: none;
    color: #fff;
    height: 35px;
    box-sizing: border-box;
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0);
    transition-property: box-shadow;
    transition-duration: 200ms;
    &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    }
    &:focus {
        color: #fff;
        box-sizing: border-box;
        box-shadow: 0px 2px 0px 0px #fff;
        transition-property: box-shadow;
        transition-duration: 300ms;
    }
    &::placeholder {
        color: #cfcccc;
    }
    `