import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components';

import baseAvatar from '../../images/avatar-base.png'

export const RightNav = ({ open, isAuth, onRedirect }) => {
    let isAuthStyle, isAuthLink = "/login"
    if (isAuth) {
        isAuthLink = "/profile"
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        function scroll() {
            window.scrollTo(0, 0);
        }
        if (open) {
            window.addEventListener('scroll', scroll);
        }
        return () => window.removeEventListener('scroll', scroll)
    })

    return (
        <Ul open={open}>
            <li>
                <NavLink onClick={onRedirect} to={"/"} style={({ isActive }) => isActive ? {
                    color: "#3b3b3b"
                } : {
                    color: "#fff"
                }}>Головна</NavLink>
            </li>
            <li>
                <NavLink onClick={onRedirect} to={"/posts"} style={({ isActive }) => isActive ? {
                    color: "#3b3b3b"
                } : {
                    color: "#fff"
                }}>Всі публікації</NavLink></li>
            <li>
                <NavLink onClick={onRedirect} to={"/news"} style={({ isActive }) => isActive ? {
                    color: "#3b3b3b"
                } : {
                    color: "#fff"
                }}>Новини</NavLink></li>
            <li><Profile_Logo_mob /></li>
        </Ul>
    )
}

const Ul = styled.ul`
    display: none;
    @media (max-width: 768px) {
        list-style: none;
        flex-flow: row nowrap;
        display: flex;
        z-index: 999;
        flex-flow: column nowrap;
        background-color: #cc4343;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: -20px;
        right: 0;
        height: 100vh;
        width: 100%;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        li {
            text-align:center;
            padding: 18px 60px;
            color: #fff;
        }
  }
`;

const Profile_Logo_mob = styled.div`
    background: url(${({ isAuth }) => isAuth ? isAuth.photo : baseAvatar});
    background-origin: border-box;
    background-repeat: no-repeat;
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 20px;
    width: 35px;
    height: 35px;
    margin-left: auto;
    margin-right: auto;`