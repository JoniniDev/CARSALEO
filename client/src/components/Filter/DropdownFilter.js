import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export const DropdownFilter = ({ className, data, onValue, onModificate, validedValue, activity, validate, onFormSumbit }) => {
    const [value, setValue] = useState()
    const [open, setOpen] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setValue(validedValue)
    }, [validedValue])

    useEffect(() => {
        if (value) {
            setOpen(true)
        }
        if (validate && onFormSumbit) {
            if (!value) {
                setError(true)
            } else {
                setError(false)
            }
        }
    }, [value, validate])

    useEffect(() => {
        setOpen(false)
        setValue()
    }, [activity])

    return (
        <ParentDiv className={className}>
            <Select
                onBlur={() => {
                    if (onValue) {
                        onValue(value)
                    }
                }}
                onChange={event => { setValue(event.target.value); if (onModificate) onModificate(event.target.value) }}
                value={value || ""}>
                {!open ? <Option value="placeholdernull" key={"placeholdernull"}>Виберіть</Option> : null}
                {data ? data.map((item, index) => {
                    return (<Option key={item.value} value={item.value}>{item.label}</Option>)
                }) : null}
            </Select>
            {error && <ErrorText>Виберіть значення</ErrorText>}
        </ParentDiv>
    )
}

const ParentDiv = styled.div`
    width: 100%;
    position: relative;
`

const ErrorText = styled.div`
    position: absolute;
    right: 0;
    width: max-content;
    padding: 5px;
    font-size: 12px;
    line-height: 1.5;
    color: #f00;
    background-color: #fff;
    border: 1px solid #f00;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`

const Option = styled.option`
    color:#fff;
    background:#cc4343;
    font-weight: 500;
`

export const Select = styled.select`
    width: 100%;
    border: none;
    border-bottom: 1px solid;
    border-radius: 2px;
    background: none;
    font-family: inherit;
    font-weight: 500;
    font-size: 14px;
    outline: none;
    color: #fff;
    box-sizing: border-box;
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0);
    transition-property: box-shadow;
    transition-duration: 200ms;
    &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    }
    &:focus {
        color: #fff;
        background: none;
        box-sizing: border-box;
        box-shadow: 0px 2px 0px 0px #fff;
        transition-property: box-shadow;
        transition-duration: 300ms;
    }
    &::placeholder {
        color: #cfcccc;
    }
    `