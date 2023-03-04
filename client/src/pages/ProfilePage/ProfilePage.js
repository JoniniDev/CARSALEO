import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { PersonalBox } from './PersonalBox'
import { CompanyBox } from './CompanyBox'
import { LoadingBox } from './LoadingBox'
import { BlockBox } from './BlockBox'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/features/auth/authSlice'
import { useNavigate } from 'react-router-dom'

export const ProfilePage = () => {
    const auth = useSelector(state => state.auth.user)
    const [loading, setLoading] = useState(true)
    const [companyBlock, setCompanyBlock] = useState(true)

    const navigator = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        setLoading(auth ? false : true)
        setCompanyBlock(auth && auth.type ? false : true)
    }, [auth])

    const logoutHandler = () => {
        dispatch(logout())
        window.localStorage.removeItem("token")
        navigator("/login")
    }

    return (
        <>
            <SubHeader>
                <Title>Мiй Профіль</Title> <SubBar><SubBarButton onClick={()=>{navigator("/new")}}>Додати оголошення</SubBarButton> <SubBarButton onClick={logoutHandler}>Вийти</SubBarButton></SubBar>
            </SubHeader>
            <MainBox>
                {loading ? <LoadingBox /> : <PersonalBox personalData={auth} />}
            </MainBox>
            <MainBox>
                {loading ? null : (companyBlock ? <BlockBox /> : <CompanyBox />)}
            </MainBox>
        </>
    )
}


const SubHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 0;
    border-radius: 5px;
    background: #cc4343;
    margin-bottom: 10px;
    @media (max-width: 480px) {
        flex-direction: column;
        gap: 10px;
    }
`

const Title = styled.h2`
    margin: 0;
    margin-left: 30px;
    @media (max-width: 480px) {
        margin: 0;
    }
`

const SubBar = styled.div`
    @media (max-width: 480px) {
        display: flex;
        justify-content: center;
        width: calc(100% - 15px);
        flex-direction: column;
        gap: 10px;
    }
`

const SubBarButton = styled.button`
    :first-child {
        margin-right: 10px;
    }
    width: max-content;
    background: #fff;
    margin: 0;
    margin-right: 30px;
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
    color: #cc4343;
    &:hover {
        opacity: 1;
        transition-duration: 300ms;
    }
    @media (max-width: 480px) {
        display: flex;
        margin: 0;
        justify-content: center;
        width: 100%
    }
`

const MainBox = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background: #cc4343;
    margin-bottom: 10px;
`