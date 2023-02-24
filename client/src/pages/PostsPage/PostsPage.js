import React from 'react'
import styled from 'styled-components'
import { FiltersBox } from './FiltersBox'
import { AllPosts } from './AllPosts'
import { useDispatch, useSelector } from 'react-redux'

export const PostsPage = () => {
  return (
    <Container>
      <FiltersBox />
          <Title>Автомобілі в Україні <SubTitle>(знайдено 8412)</SubTitle></Title>
      <AllPosts />
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