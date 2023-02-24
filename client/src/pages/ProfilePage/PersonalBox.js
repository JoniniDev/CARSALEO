import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export const PersonalBox = ({personalData}) => {
    const [fullName, setFullName] = useState("")
    const [password, setPassword] = useState("")

    useEffect(()=>{
        setFullName(personalData.fullName)
    }, [])

    return (
        <Box>
            <SubBox>
                <SubTitle>Персональна інформація</SubTitle>
                <Title>Прізвище та ім'я</Title>
                <Input type="text" value={fullName} onChange={e => setFullName(e.target.value)}/>
                <Title>Змінити пароль</Title>
                <Input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </SubBox>
            <SubBox>
                <SubTitle>Статистика</SubTitle>
                <StatsTitle>Переглянуто оголошень: {personalData.statsAllPostCount}</StatsTitle>
                <StatsTitle>Створено оголошень: {personalData.statsCreatedPost}</StatsTitle>
                <StatsTitle>Дата створення аккаунту: {new Date(personalData.createdAt).toLocaleDateString('ua-UA')}</StatsTitle>
                <StatsTitle>Відкрито контактів: {personalData.statsContactViews}</StatsTitle>
                <StatsTitle></StatsTitle>
            </SubBox>
        </Box>
    )
}

const SubTitle = styled.h2`
    margin: 10px 0;
    font-size: 20px;
    padding: 10px;
    margin-bottom: 8px;
`

const Box = styled.div`
    margin-left: 20px;
    display: flex;
    flex-direction: row;
    column-gap: 10em;
    flex-wrap: wrap;
    justify-content: start;
    padding-bottom: 40px;
`

const Title = styled.div`
    margin-left: 10px;
    margin-bottom: 5px;
    font-weight: 600;
`

const SubBox = styled.div`
    box-sizing: border-box;
    width: calc(100% - 40px);
    max-width: 300px;
`

const StatsTitle = styled(Title)`
    margin-bottom: 12px;
`

const Input = styled.input`
    margin-left: 10px;
    margin-bottom: 8px;
    width: 100%;
    border: 1px solid;
    border-radius: 5px;
    background: none;
    font-family: inherit;
    font-size: 14px;
    outline: none;
    color: #fff;
    height: 30px;
    padding: 5px;
    font-weight: 500;
    box-sizing: border-box;
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0);
    transition-property: box-shadow;
    transition-duration: 200ms;
    &:focus {
        color: #fff;
        height: 30px;
        box-sizing: border-box;
        box-shadow: 0px 2px 0px 0px #fff;
        transition-property: box-shadow;
        transition-duration: 300ms;
    }
    &::placeholder {
        color: #cfcccc;
    }
`