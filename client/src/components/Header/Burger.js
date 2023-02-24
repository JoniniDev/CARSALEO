import React, { useState } from 'react';
import styled from 'styled-components';
import { RightNav } from './RightNav';

export const Burger = ({ isAuth }) => {
    const [open, setOpen] = useState(false)

    const onRedirect = () => {
      setOpen(false)
    }

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <RightNav open={open} onRedirect={onRedirect} isAuth={isAuth} />
        </>
    )
}

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  top: 15px;
  right: 5px;
  z-index: 9999;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  @media (max-width: 300px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    position: absolute;
    right: 6%;
    top: 24px;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: #fff;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;