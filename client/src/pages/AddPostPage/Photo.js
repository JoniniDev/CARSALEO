import React, { useState } from 'react'
import styled from 'styled-components'

export const Photo = ({ photo, onDelete }) => {
    const [hover, setHover] = useState(false)

    const hoverHandler = () => {
        setHover(!hover)
    }

    return (
        <Wrapper>
            <Image src={photo.data} onMouseEnter={hoverHandler} />{hover ? <HoverOverlay onClick={()=>{onDelete(photo.id)}} onMouseLeave={hoverHandler}><Close /> </HoverOverlay> : null}
        </Wrapper>
    )
}

const Image = styled.img`
    background: black;
    width: 100%;
    max-width: 306px;
    height: 170px;
    object-fit: cover;
    object-position: center center;
`

const Close = styled.div`
    cursor: pointer;
    position: absolute;
    top: 85px;
    left: 128px;
    :before {
        content: ""; position: absolute; width: 50px; height: 6px; background: #ffffff;
        transform: rotate(45deg);
    }
    :after {
        content: ""; position: absolute; width: 50px; height: 6px; background: #ffffff;
        transform: rotate(-45deg);
    }
`

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 306px;
    height: 170px;
    margin: 5px 0px;
    margin-bottom: 10px;
`

const HoverOverlay = styled.div`
    position: absolute; 
    width: 100%;
    height: 100%;
    top: 0;
    background: black;
    opacity: 0;
    transition: opacity 0.3s ease;
    cursor: pointer;
    :hover {
        opacity: 0.5;
    }
`