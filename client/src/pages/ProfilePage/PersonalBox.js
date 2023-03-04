import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ProfileAvatar } from './ProfileAvatar'
import { changeFullName } from '../../services/profileUpdate'

export const PersonalBox = ({ personalData }) => {
    const [fullName, setFullName] = useState(personalData.fullName)
    const [changed, setChanged] = useState(false)
    const [password, setPassword] = useState("")

    const fullNameHandler = (value) => {
        setChanged(false)
        setFullName(value)
        const setName = setTimeout(() => {
            changeFullName(value.trim()).then((msg) => { console.log(msg) })
            setChanged(true)
        }, 2000)
    }

    useEffect(() => {
        const setVisibly = setTimeout(() => {
            setChanged(false)
        }, 5000)
        return () => clearTimeout(setVisibly)
    }, [changed])

    const onChanged = () => {
        setChanged(true)
    }

    return (
        <Box>
            <SubBox>
                <SubTitle>Персональна інформація</SubTitle>
                <Title>Ваш аватар</Title>
                <ProfileAvatar onChanged={onChanged} />
                <Title>Прізвище та ім'я</Title>
                <Input type="text" value={fullName} onChange={e => fullNameHandler(e.target.value)} />
                <span style={{ opacity: changed ? "1" : "0" }}>Успішно зміненно!</span>
                {/* <Title>Змінити пароль</Title>
                <Input type="password" value={password} onChange={e => setPassword(e.target.value)} /> */}
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
    span {
        transition: opacity 0.5s;
        margin-left: 12px;
        font-size: 14px;
    }
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