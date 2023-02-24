import React from 'react'
import styled from 'styled-components'

export const CompanyBox = () => {
    return (
        <Box>
            <SubBox>
                <SubTitle>Інформація дилера</SubTitle>
                <Title>Назва компанії</Title>
                <Input />
                <Title>Сайт</Title>
                <Input />
            </SubBox>
            <SubBox>
                <SubTitle>Статистика</SubTitle>
                <StatsTitle>Переглянуто оголошень: 512</StatsTitle>
                <StatsTitle>Створено оголошень: 2</StatsTitle>
                <StatsTitle>Дата створення аккаунту: 10.02.2023</StatsTitle>
                <StatsTitle>Відкрито контактів: 153</StatsTitle>
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