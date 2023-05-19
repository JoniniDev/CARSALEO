import React, { useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

export const PostPage = () => {
    return (
        <Container>
            {/* <PreviewBox/> */}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    gap: 10px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    `

const Title = styled.h2`
    margin: 0;
    margin-left: 15px;
    color: #cc4343;
    display: none;
    flex-wrap: wrap;
    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        gap: 5px;
    }
    `

const SubTitle = styled.div`
    font-size: 16px;
    color: #3b3b3b;
    `

const ColorBox = styled.div`
    width: 11px;
    height: 11px;
    margin: 2px;
    margin-left: 0px;
    margin-right: 4px;
    background: ${({ color }) => color};
    border: solid 1px #3b3b3b;
`

const Image = styled.img`
    background: black;
    height: 600px;
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    object-fit: cover;
    object-position: center center;
`

const Placeholder = styled.div`
    color: black;
    text-align: center;
    background: #fff;
    padding: 20% 0px;
    font-size: 25px;
    border: black solid 35px;
    border-color: #d9d9d9;
    box-sizing: border-box;
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`

const Paragraph = styled.div`
    margin: 10px;
    color: #000;
    word-break: break-word;
    font-size: 15px;
    font-weight: 600;
`

const ParagraphInside = styled.div`
    color: #3b3b3b;
    white-space: pre-line;
    display: flex;
`

const Price = styled.div`
    color: #56c762;
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    align-items: center;
`

const PriceSm = styled(Price)`
    font-size: 14px;
    color: #3b3b3b;
`