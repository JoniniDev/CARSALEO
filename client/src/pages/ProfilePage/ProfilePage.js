import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { PersonalBox } from './PersonalBox'
import { CompanyBox } from './CompanyBox'
import { LoadingBox } from './LoadingBox'
import { BlockBox } from './BlockBox'
import { useSelector } from 'react-redux'

export const ProfilePage = () => {
    const auth = useSelector(state => state.auth.user)
    const [loading, setLoading] = useState(true)
    const [companyBlock, setCompanyBlock] = useState(true)

    useEffect(() => {
        console.log(auth)
        setLoading(auth ? false : true)
        setCompanyBlock(auth && auth.type ? false : true)
    }, [auth])

    const profileData = {
        name: "Bogdan Ochkan",
        accountStatus: "Звичайний"
    }
    return (
        <>
            <SubHeader>
                <Title>Мiй Профіль</Title>
            </SubHeader>
            <MainBox>
                {loading ? <LoadingBox /> : <PersonalBox personalData={auth} />}
            </MainBox>
            <MainBox>
                {loading ? <LoadingBox /> : (companyBlock ? <BlockBox /> : <CompanyBox />)}
            </MainBox>
        </>
    )
}


const SubHeader = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background: #cc4343;
`

const Title = styled.h2`
    margin: 10px 0;
    margin-left: 20px;
    padding: 10px;
`

const SubTitle = styled(Title)`
    font-size: 20px;
    margin-bottom: 0px;
`

const MainBox = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background: #cc4343;
    margin-bottom: 10px;
`