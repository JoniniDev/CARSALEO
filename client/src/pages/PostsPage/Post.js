import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { serverEndpoint } from '../../utils/variables'


export const Post = ({ postData }) => {

    const parsePrice = (price) => {
        const priceString = String(price).replace(/\s/g, '');
        const groups = priceString.split('').reverse().join('').match(/\d{1,3}/g);
        const parsedPrice = groups.join(' ').split('').reverse().join('');
        return parsedPrice;
    }

    const parseMileage = (mileage) => {
        if (mileage >= 1000 && mileage < 1000000) {
            const abbreviatedMileage = (mileage / 1000).toFixed(0);
            return `${abbreviatedMileage} тис.`;
        } else {
            return String(mileage);
        }
    }


    const { brand, model, priceUSD, priceUAH, carType, color, mileage, carNumber, vinNumber, capacity, fuel, year, region, state, description, images } = postData

    return (
        <PostContainer>
            <Link style={{ height: "100%", }} to="/"><ImageBox image={`${serverEndpoint}/posts/${images[0]}`} /></Link>
            <InfoBox>
                <Title><Link style={{ color: 'inherit' }}>{brand} {model} {year}</Link><Price>${parsePrice(priceUSD)}<PriceSm> ~ ₴ {parsePrice(priceUAH)}</PriceSm></Price></Title>
                <TextContainer>
                    <TextGroup>
                        <Text>Пробіг: {parseMileage(mileage)} км</Text>
                        <Text>Двигун: {fuel} / {capacity} л</Text>
                        <Text>Колір: {color}</Text>
                    </TextGroup>
                    <TextGroup>
                        <Text>Місто: {region}</Text>
                        <Text>Стан: {state}</Text>
                        <Text>Продавець: Користувач</Text>
                    </TextGroup>
                </TextContainer>
            </InfoBox>
        </PostContainer>
    )
}

const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px 8%;
    flex-wrap: wrap;
    margin: 10px;
    
`

const TextGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const Title = styled.div`
    margin: 10px;
    color: #cc4343;
    font-size: 22px;
    font-weight: 600;
`

const Text = styled.div`
    color: #3b3b3b;
    font-size: 15px;
`

const ImageBox = styled.div`
    background: url(${props => props.image || "#fff"});
    background-position: center;
    background-size: cover;
    height: 100%;
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`

const InfoBox = styled.div`
    height: 100%;
    flex-shrink: 3;
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

const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    width: 100%;
    height: 120vw;
    min-height: 450px;
    max-height: 600px;
    border-radius: 5px;
    margin-bottom: 10px;
`