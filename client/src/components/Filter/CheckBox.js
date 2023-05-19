import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export const CheckBox = ({ item, onCheck, activity, validate }) => {
    const [check, setCheck] = useState(false)

    const checkHandler = () => {
        setCheck((check) => !check)
        onCheck(item)
    }

    useEffect(() => {
        setCheck(false)
    }, [activity])

    useEffect(() => {
        setCheck(false)
    }, [])


    return (
        <Container onClick={checkHandler}><Input readOnly checked={check} type="checkbox" value={item} name={item} /><label htmlFor={item}>{item}</label></Container>
    )
}

const Container = styled.div`
    display: flex;
    gap: 3px;
    user-select: none;
        -moz-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
        -ms-user-select: none;
`

const Input = styled.input`
    display: block;
    border: none;
    border-bottom: 1px solid;
    border-radius: 2px;
    background: none;
    font-family: inherit;
    font-size: 14px;
    outline: none;
    color: #fff;
    box-sizing: border-box;
    `