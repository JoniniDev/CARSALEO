import React from 'react'
import styled from 'styled-components'
import { NewsBlock } from '../../components/News/NewsBlock'

export const NewsPage = () => {
    const data = [
        { _id: "1", title: "Hello world", image: "https://cdn3.riastatic.com/photosnew/auto/photo/bmw_x5__482329208hd.webp", shortDescription: "Amet fugiat mollit voluptate aliquip veniam consequat. Aliquip reprehenderit aute sint ex velit dolore. Sunt non nostrud irure id ullamco.", date: "19.02.2023" },
        { _id: "2", title: "Hello world", image: "black", shortDescription: "Amet fugiat mollit voluptate aliquip veniam consequat. Aliquip reprehenderit aute sint ex velit dolore. Sunt non nostrud irure id ullamco.", date: "05.02.2023" },
        { _id: "3", title: "Hello world", image: "black", shortDescription: "Amet fugiat mollit voluptate aliquip veniam consequat. Aliquip reprehenderit aute sint ex velit dolore. Sunt non nostrud irure id ullamco.", date: "21.01.2023" },
        { _id: "4", title: "Hello world", image: "black", shortDescription: "Amet fugiat mollit voluptate aliquip veniam consequat. Aliquip reprehenderit aute sint ex velit dolore. Sunt non nostrud irure id ullamco.", date: "09.01.2023" }]
    return (
        <Container>
            {
                data.map(item => {
                    return (<NewsBlock key={item._id} {...item} />)
                })
            }
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: max-content;
`
