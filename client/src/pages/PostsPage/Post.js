import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Post = ({ id, title, thumbnail }) => {
    thumbnail = "https://cdn3.riastatic.com/photosnew/auto/photo/bmw_x5__482329208hd.webp"
    return (
        <PostContainer>
            <Link style={{height: "100%",}}to="/"><ImageBox image={thumbnail}/></Link>
            <InfoBox>
                <Title><Link style={{ color: 'inherit' }}>{title}</Link><Price>91 999 $<PriceSm> ~ 3 681 800 ₴</PriceSm></Price></Title>
                <TextContainer>
                    <TextGroup>
                        <Text>Пробіг: 10 тис. км</Text>
                        <Text>Двигун: Бензин / 2.8 л</Text>
                        <Text>Колір: Білий</Text>
                    </TextGroup>
                    <TextGroup>
                        <Text>Місто: Полтава</Text>
                        <Text>Стан: Ідеальний</Text>
                        <Text>Продавець: Дилер</Text>
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