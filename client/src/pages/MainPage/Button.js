import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export const Button = ({ children, onActive, type, activeStatus }) => {
    const [active, setActive] = useState(false)
    const onSelected = () => {
        setActive(active => !active)
    }

    useEffect(() => {
        onActive({ children, type }, active)
    }, [active])

    useEffect(() => {
        if (active) {
            setActive(activeStatus)
        }
    }, [activeStatus])



    return (
        <ButtonStyled isActive={active} onClick={onSelected}>{children}</ButtonStyled>
    )
}

const ButtonStyled = styled.button`
  width: inherit;
  background: ${({ isActive }) => isActive ? "#86d98f" : "#cc4343"};
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  padding: 10px;
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
  color: ${({ isActive }) => isActive ? "#3b3b3b" : "#fff"};;
    &:hover {
        opacity: 1;
        transition-duration: 300ms;
    }`