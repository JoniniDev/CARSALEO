import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { CheckBox } from './CheckBox'


export const CheckBoxFilter = ({ data, limit }) => {
    const [resData, setResData] = useState([])
    const [activeArray, setActiveArray] = useState([])
    const [buttonActive, setButtonActive] = useState(true)

    const generateData = (more) => {
        const array = resData ? resData : []
        setActiveArray((!more) ? array.slice(0, limit) : array)
        setButtonActive(!more)
    }

    useEffect(() => {
        setResData((data && data.length) ? data : [])
    }, [data])

    useEffect(()=>{
        generateData(false)
    }, [resData])

    return (
        <>
            {
                activeArray.map((item, index) => {
                    return (<CheckBox item={item} key={index}></CheckBox>)
                })
            }
            { (resData.length > limit && buttonActive) ? <Button onClick={() => { generateData(true) }}>Інші</Button> : null}
        </>
    )
}

const Button = styled.button`
    width: 100%;
    background: #fff;
    margin-top: 15px;
    margin-bottom: 10px;
    border: none;
    border-radius: 5px;
    white-space: nowrap;
    z-index: 100;
    font-family: inherit;
    font-size: inherit;
    font-weight: 500;
    cursor: pointer;
    opacity: 0.9;
    transition-property: opacity;
    transition-duration: 200ms;
    color: #cc4343;
    &:hover {
        opacity: 1;
        transition-duration: 300ms;
    }
`