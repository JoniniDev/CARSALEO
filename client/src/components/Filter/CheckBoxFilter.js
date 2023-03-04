import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { CheckBox } from './CheckBox'


export const CheckBoxFilter = ({ data, limit, onSelected, activity }) => {
    const [resData, setResData] = useState([])
    const [activeArray, setActiveArray] = useState([])
    const [buttonActive, setButtonActive] = useState(true)
    const [checked, setChecked] = useState([])

    const generateData = (more) => {
        const array = resData ? resData : []
        setActiveArray((!more) ? array.slice(0, limit) : array)
        setButtonActive(!more)
    }

    useEffect(() => {
        setResData((data && data.length) ? data : [])
    }, [data])

    useEffect(() => {
        generateData(false)
    }, [resData])

    useEffect(() => {
        onSelected(checked)
    }, [checked])

    const onCheck = (selectedItem) => {
        if (selectedItem) {
            if (!checked.includes(selectedItem)) {
                setChecked([...checked, selectedItem])
            } else {
                setChecked([...checked.filter(function (name) {
                    return name !== selectedItem
                })])
            }
        }
    }

    const onSearch = (e) => {
        if (e.target.value) {
            setButtonActive(false)
            if (activeArray.length) {
                setActiveArray([...resData.filter((item) => item.toLowerCase().includes(e.target.value.toLowerCase()))])
            }
        } else {
            generateData(false)
        }
    }

    return (
        <>
            {
                resData.length > 5 ? <Input onChange={e => onSearch(e)} placeholder='Пошук' type="text" /> : null
            }
            {
                activeArray.length ? activeArray.map((item, index) => {
                    return (<CheckBox
                        item={item}
                        onCheck={(data) => { onCheck(data) }}
                        key={index}
                        activity={activity}
                    ></CheckBox>)
                }) : <NotFound>Нічого не знайдено</NotFound>
            }
            {(resData.length > limit && buttonActive) ? <Button onClick={() => { generateData(true) }}>Інші</Button> : null}
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

const NotFound = styled.div`
    width: 100%;
    text-align: center;
    font-size: 14px;
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
    height: 25px;
    margin-bottom: 10px;
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