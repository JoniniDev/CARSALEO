import React from 'react'
import styled from 'styled-components'
import { TbLock } from 'react-icons/tb'

export const BlockBox = () => {
    return (
        <Box>
            <TbLock size={40} />
            <Title>Інформація дилера</Title>
            <SubTitle>Цей розділ доступний лише для <a href=''>дилерських облікових записів</a></SubTitle>
        </Box>
    )
}

const Box = styled.div`
    text-align: center;
    padding: 10px;
`

const Title = styled.h2`
    margin: 0;
    text-align: center;
    margin: 10px 0;
`

const SubTitle = styled.div`
    margin: 0;
    text-align: center;
    margin-bottom: 10px;
    a {
        color: #fff;
        border-bottom: 1px solid;
    }
`