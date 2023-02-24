import React from 'react'
import styled from 'styled-components'

// import "./Footer.scss"

export const Footer = () => {
    return (
        <div>
            <FooterContainer>
                <Footer_Action>

                </Footer_Action>
            </FooterContainer>
            <FooterBottomLine><FooterLineLink href="/">Auto Motion</FooterLineLink> © 2023</FooterBottomLine>
        </div>
    )
}

const FooterBottomLine = styled.div`
    background: #ad3939;
    height: 20px;
    text-align: center;
    font-size: 12px;
    padding-top: 7px;
`

const FooterContainer = styled.div`
    width: 100%;
    height: 200px;
    background: #cc4343;
    display: flex;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`

const Footer_Action = styled(FooterContainer)`
    max-width: 960px;
`

const FooterLineLink = styled.a`
    color: #fff;
`