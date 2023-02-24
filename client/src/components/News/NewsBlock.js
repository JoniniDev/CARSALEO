import React from 'react'
import styled from 'styled-components'

export const NewsBlock = ({ _id, title, image, shortDescription, date }) => {
    return (
        <Container>
            <Image image={image} />
            <Title>{title}</Title>
            <ShortDescription>{shortDescription}</ShortDescription>
            <SubFooter>Опубліковано {date}</SubFooter>
        </Container>
    )
}

const Container = styled.div`
    background: #cc4343;
    height: max-content;
    border-radius: 5px;
    margin-bottom: 10px;
`

const Image = styled.div`
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    background: url(${({ image }) => image});
    background-position: center;
    background-size: cover;
    height: 60vw;
    min-height: 100px;
    max-height: 600px;
`

const Title = styled.h2`
    margin: 0;
    padding: 10px;
`

const ShortDescription = styled.p`
    padding: 10px;
    margin: 0;
`

const SubFooter = styled.div`
    font-size: 14px;
    text-align: right;
    padding: 10px;
`