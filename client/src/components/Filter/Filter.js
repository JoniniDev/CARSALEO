import React, { useEffect, useState } from 'react'
import { RiArrowDownSFill } from 'react-icons/ri'
import styled from 'styled-components'
import { ActiveContainer } from './ActiveContainer'

export const Filter = ({ children, type, data, min, max, inputText, limit }) => {

    const [active, setActive] = useState(false)

    const openCategory = () => {
        setActive(active => !active)
    }

    return (
        <Container>
            <SubHeader onClick={openCategory}><Icon active={active}><RiArrowDownSFill /></Icon> {children}</SubHeader>
            <ActiveContainer type={type} data={data} min={min} max={max} inputText={inputText} limit={limit} active={active} />
        </Container>
    )
}

const Container = styled.div`
`

const SubHeader = styled.div`
    display: flex;
    cursor: pointer;
    user-select: none;
        -moz-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
        -ms-user-select: none;
`

const Icon = styled.div`
    width: max-content;
    rotate: ${props => props.active ? "0deg" : "270deg"};
    padding: 0;
    margin: 0;
`