import React, { useState } from 'react'
import styled from 'styled-components'
import { Carousel } from './Carousel'
import { FastFilter } from './FastFilter'

import img1 from './Carousel_Images/1.png'
import img2 from './Carousel_Images/2.png'
import img3 from './Carousel_Images/3.png'
import img4 from './Carousel_Images/4.png'

export const MainPage = () => {

  return (
    <>
      <Page_menu>
        <Carousel data={[img1, img2, img3, img4]} />
      </Page_menu>
      <Car_Reapeter>
        <FastFilter />
      </Car_Reapeter>
      {/* <Rec_Reapeter>

      </Rec_Reapeter>
      <Categories_Reapeater>

      </Categories_Reapeater> */}
    </>
  )
}

// Styled Components

const Reapeter = styled.div`
  display: flex;
  padding-bottom: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-basis: auto;
  gap: 1em;
`

const Button = styled.button`
  width: 150px;
  background: #fff;
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
    }`

const Title = styled.h2`
  margin: 0;
  padding-top: 10px;
  text-align: center;
  padding-bottom: 10px;
`

const Page_menu = styled.div`
  width: 100%;
  height: 500px;
  background: #cc4343;
  border-radius: 5px;
  `

const Car_Reapeter = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  margin-bottom: 10px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  `

const Rec_Reapeter = styled.div`
  width: 100%;
  height: 410px;
  background: #cc4343;
  border-radius: 5px;
  margin-bottom: 10px;`

const Categories_Reapeater = styled.div`
  width: 100%;
  height: 210px;
  background: cyan;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-bottom: 10px;`