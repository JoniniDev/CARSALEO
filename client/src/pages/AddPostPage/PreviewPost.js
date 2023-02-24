import React from 'react'
import styled from 'styled-components'

export const PreviewPost = () => {
    return (
        <Container>
            <Image />
            <Title>Data</Title>
        </Container>
    )
}

const Container = styled.div`
`

const Image = styled.div`
    background: black;
    height: 400px;
`

const Title = styled.h2`
    margin: 0;
`