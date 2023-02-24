import { React, useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import styled from 'styled-components'

const PAGE_WIDTH = 960

export const Carousel = ({ data }) => {
    const [items, setItems] = useState([])
    const [offset, setOffset] = useState(0)
    const lastRunTime = Date.now();

    const hendleLeftArrowClick = () => {
        if ((Date.now() - lastRunTime) > 500) {
            setOffset((offset) => {
                return Math.min((offset + 1) % data.length, 0)
            })
        }
    }

    const hendleRightArrowClick = () => {
        if ((Date.now() - lastRunTime) > 500) {
            setOffset((offset) => {
                return (offset - 1) % data.length
            })
        }
    }

    useEffect(() => {
        const instanceData = data.map((item, index) => {
            return (<div key={index} style={
                {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    userSelect: "none",
                    background: `url(${item})`,
                    height: "100%",
                    minWidth: `${PAGE_WIDTH}px`,
                    backgroundSize: "auto",
                    backgroundRepeat: "no-repeat",
                    backgroundOrigin: "border-box"
                }
            } />)
        })
        setItems(
            instanceData
        )
        setInterval(() => {
            setOffset((offset) => {
                return (offset - 1) % data.length
            })
        }, 10000);
    }, [])
    useEffect(() => {
        let x1 = null
        const handleTouchStart = (event) => {
            x1 = event.touches[0].clientX
        }
        const handleTouchMove = (event) => {
            if (!x1) return false
            let x2 = event.touches[0].clientX
            let xDiff = x2 - x1;
            if (xDiff > 0) {
                x1 = null
                hendleLeftArrowClick()
            } else if (xDiff < 0) {
                x1 = null
                hendleRightArrowClick()
            }
        }
        window.addEventListener("touchstart", handleTouchStart, false)
        window.addEventListener("touchmove", handleTouchMove, false)
        return () => {
            window.removeEventListener("touchstart", handleTouchStart, false)
            window.removeEventListener("touchmove", handleTouchMove, false)
        }
    })
    return (
        <Main_Container>
            <ArrowLeft onClick={hendleLeftArrowClick}></ArrowLeft>
            <Window>
                <AllItems
                    style={{
                        transform: `translateX(${offset * 960}px)`,
                    }}>
                    {items}
                </AllItems>
            </Window>
            <ArrowRight onClick={hendleRightArrowClick}></ArrowRight>
        </Main_Container>
    )
}

const Main_Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 9;`

const Window = styled.div`
    height: 100%;
    overflow: hidden;
    border-radius: 5px;
`

const AllItems = styled.div`
    height: 100%;
    display: flex;
    transition: transform;
    transition-property: transform;
    transition-duration: 700ms;
    transition-timing-function: cubic-bezier(0.87, 0, 0.13, 1);`

const ArrowLeft = styled(FaChevronLeft)`
    cursor: pointer;
    position: absolute;
    left: 12px;
    z-index: 999;
`

const ArrowRight = styled(FaChevronRight)`
    cursor: pointer;
    position: absolute;
    right: 12px;
    z-index: 999;
`