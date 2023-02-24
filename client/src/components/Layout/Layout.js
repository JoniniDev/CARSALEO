import React from 'react'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import styled from 'styled-components'

export const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Body>
                <Header />
                <LayoutContainer>
                    {children}
                </LayoutContainer>
                <Footer />
            </Body>
        </React.Fragment>
    )
}

const Body = styled.div`
    margin: 0 auto;
    width: 100%;
    padding: 0;
    color: white;
`

const LayoutContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    max-width: 960px;
    min-height: calc(100vh - 70px);
`