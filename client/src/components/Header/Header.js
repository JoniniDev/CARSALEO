import React, { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth, logout } from '../../redux/features/auth/authSlice'
import { serverEndpoint } from '../../utils/variables'
import styled from 'styled-components'

import { Burger } from './Burger'

import logo from '../../full_logo_transparent_big_ua.svg'
import baseAvatar from '../../images/avatar-base.png'

export const Header = () => {
    const isAuth = useSelector(checkIsAuth)
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    let isAuthStyle, isAuthLink = "/login"
    if (isAuth) {
        isAuthStyle = {
            backgroundImage: `url("${user.avatar ? `${serverEndpoint}/avatars/${user.avatar}` : undefined}")`,
            backgroundOrigin: "border-box",
            backgroundSize: "cover",
            borderRadius: "10px"
        }
        isAuthLink = "/profile"
    }

    return (
        <>
            <Header_Base>
                <Header_Action>
                    <NavBar_Item><NavLink to={"/"}><Ua_Box><Logo src={logo} alt="" /></Ua_Box></NavLink></NavBar_Item>
                    <NavBar_Base>
                        <NavBar_Item>
                            <NavLink to={"/"} style={({ isActive }) => isActive ? {
                                color: "#3b3b3b"
                            } : {
                                color: "#cc4343"
                            }}>
                                <Menu_Box>Головна</Menu_Box>
                            </NavLink>
                        </NavBar_Item>

                        <NavBar_Item>
                            <NavLink to={"/posts"} style={({ isActive }) => isActive ? {
                                color: "#3b3b3b"
                            } : {
                                color: "#cc4343"
                            }}>
                                <Menu_Box>Всі публікації</Menu_Box>
                            </NavLink></NavBar_Item>

                        <NavBar_Item>
                            <NavLink to={"/news"} style={({ isActive }) => isActive ? {
                                color: "#3b3b3b"
                            } : {
                                color: "#cc4343"
                            }}>
                                <Menu_Box>Новини</Menu_Box>
                            </NavLink>
                        </NavBar_Item>

                        <NavBar_Item>
                            <NavLink to={isAuthLink} style={({ isActive }) => isActive ? {
                                color: "#3b3b3b"
                            } : {
                                color: "#cc4343"
                            }}>
                                <Menu_Box><Profile_Logo style={isAuthStyle} /></Menu_Box>
                            </NavLink>
                        </NavBar_Item>
                        <Burger isAuth={isAuth} />
                    </NavBar_Base>
                </Header_Action>
            </Header_Base>
        </>
    )
}

// Styled-Components

const Header_Base = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-around;
    background: #cc4343;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    margin-bottom: 10px;

    a {
        text-decoration: none;
        color: inherit;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }`

const Header_Action = styled(Header_Base)`
    max-width: 960px;
`

const Profile_Logo = styled.div`
    background: url(${baseAvatar});
    background-origin: border-box;
    background-repeat: no-repeat;
    background-size: cover;
    width: 18px;
    height: 18px;
    margin-left: auto;
    margin-right: auto;
    opacity: 0.9;
    transition-property: opacity;
    transition-duration: 200ms;

    &:hover {
        opacity: 1;
        transition-duration: 300ms;
    }`

const Menu_Box = styled.div`
    background: #fff;
    color: inherit;
    padding: 10px;
    border-radius: 5px;
    white-space: nowrap;
    z-index: 100;
    opacity: 0.9;
    transition-property: opacity;
    transition-duration: 200ms;

    &:hover {
        opacity: 1;
        transition-duration: 300ms;
        background: #fff;
    }
    @media (max-width: 768px) {
        display: none;
        justify-content: space-around;
        flex-flow: column nowrap;
      }
    `

const Logo = styled.img`
    width: 130px;
    padding-right: 5px;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    `

const NavBar_Item = styled.div`
    justify-content: space-between;
    margin: auto 5px;
    max-width: 100%;
    `

const NavBar_Base = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 15%;`

const Ua_Box = styled.div`
    color: #cc4343;
    padding: 8px;
    border-radius: 5px;
    white-space: nowrap;
    z-index: 100;
    opacity: 0.9;
    transition-property: opacity;
    transition-duration: 200ms;
    background: #292929;
    /* background: rgb(51, 85, 255);
    background: linear-gradient(180deg, rgba(51, 85, 255, 1) 45%, rgba(255, 235, 51, 1) 55%); */
    display: flex;

    &:hover {
        opacity: 1;
        transition-duration: 300ms;
        /* background: rgb(51, 85, 255);
        background: linear-gradient(180deg, rgba(51, 85, 255, 1) 45%, rgba(255, 235, 51, 1) 55%); */
    }

    @media (max-width: 300px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    position: absolute;
    left: 6%;
    top: 19px;
  }
`