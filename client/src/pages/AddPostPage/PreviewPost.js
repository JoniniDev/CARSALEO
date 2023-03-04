import React, { useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { convertUSDtoUAH } from '../../services/currency'

export const PreviewPost = ({ brand, model, year, price, capacity, mileage, fuel, carNumber, carType, vinNumber, color, state, description, region }) => {
    const [UAH, setUAH] = useState(0)

    const convert = useCallback(
        () => {
            if (price) {
                convertUSDtoUAH(price).then(({ result }) => {
                    setUAH(result)
                })
            }
        }
    )

    useEffect(() => {
        if (price) {
            setTimeout(convert, 3000)
            setUAH(0)
            return () => {
                clearTimeout(convert)
            }
        }
    }, [price])


    return (
        <Container>
            <Image />
            <Title>{brand ? brand : "..."} {model ? model : "..."} {year ? year : "..."}<Price>{price ? price.toLocaleString('ua') : "..."} $<PriceSm> ~ {UAH != 0 ? UAH.toLocaleString('ua') : <LoadingDots>...</LoadingDots>} ₴</PriceSm></Price></Title>
            <Paragraph>Пробіг: <ParagraphInside>{mileage ? mileage.toLocaleString('ua') : "..."} км</ParagraphInside></Paragraph>
            <Paragraph>Двигун: <ParagraphInside>{capacity ? capacity : "..."} л ({fuel ? fuel : "..."})</ParagraphInside></Paragraph>
            {color ? <Paragraph>Колір: <ParagraphInside>{color}</ParagraphInside></Paragraph> : null}
            {carType ? <Paragraph>Тип кузову: <ParagraphInside>{carType}</ParagraphInside></Paragraph> : null}
            {state ? <Paragraph>Технiчний стан: <ParagraphInside>{state}</ParagraphInside></Paragraph> : null}
            <Paragraph>Місто:  <ParagraphInside>{region ? region : "..."}</ParagraphInside></Paragraph>
            <Paragraph>Державний номер:  <ParagraphInside>{carNumber ? carNumber : "..."}</ParagraphInside></Paragraph>
            <Paragraph>VIN-Код:  <ParagraphInside>{vinNumber ? vinNumber : "..."}</ParagraphInside></Paragraph>
            <Paragraph>Опис:  <ParagraphInside>{description ? description : "..."}</ParagraphInside></Paragraph>
        </Container>
    )
}

const Container = styled.div`
    background: #fff;
    border-radius: 5px;
    padding-bottom: 10px;
`

const LoadingDots = styled.div`
    animation: ease-in 1s infinite dots;
    @keyframes dots {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`

const Image = styled.div`
    background: black;
    height: 400px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`

const Title = styled.div`
    margin: 10px;
    color: #cc4343;
    font-size: 22px;
    font-weight: 600;
`

const Paragraph = styled.div`
    margin: 10px;
    color: #000;
    font-size: 15px;
    font-weight: 600;
`

const ParagraphInside = styled.div`
    color: #3b3b3b;
    white-space: pre-line;
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