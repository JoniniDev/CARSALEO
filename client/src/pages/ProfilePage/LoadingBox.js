import React from 'react'
import styled from 'styled-components'

export const LoadingBox = () => {
    return (
        <Box>
            <h1>Skeleton</h1>
        </Box>
    )
}

const Box = styled.div`
    margin-left: 20px;
    display: flex;
    flex-direction: row;
    column-gap: 10em;
    flex-wrap: wrap;
    justify-content: start;
    padding-bottom: 40px;
`