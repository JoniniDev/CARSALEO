import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


export const DropdownFilter = ({className, data, onValue, validedValue }) => {
    const [value, setValue] = useState()
    const [open, setOpen] = useState(false)

    useEffect(() => {
        setValue(validedValue)
    }, [validedValue])

    useEffect(() => {
        if (value) {
            setOpen(true)
        }
    }, [value])

    return (
        <ParentDiv className={className}>
            <Select
                onBlur={() => { onValue(value) }}
                onChange={event => { setValue(event.target.value) }}
                value={value || ""}>
                {!open ? <Option value="placeholdernull" key={"placeholdernull"}>Виберіть</Option> : null}
                {data ? data.map((item, index) => {
                    return (<Option key={item.value} value={item.value}>{item.label}</Option>)
                }) : null}
            </Select>
        </ParentDiv>
    )
}

const ParentDiv = styled.div`
    width: 100%;
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