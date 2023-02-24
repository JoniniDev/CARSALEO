import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import { SiBmw, SiMercedes, SiVolkswagen, SiAudi, SiOpel } from 'react-icons/si'
import { IoMdRefresh } from 'react-icons/io'

export const FastFilter = () => {
    const [selectedIncludes, setSelectedIncludes] = useState([])
    const [activeStatus, setActiveStatus] = useState(true)
    const [foundedResultsByFilter, setFoundedResultsByFilter] = useState("")

    const poolReapeters = (data) => {
        if (data.length) {
            setFoundedResultsByFilter(`(${36 - data.length})`)
        } else {
            setFoundedResultsByFilter("")
        }
    }

    const onButtonActived = (data, state) => {
        setActiveStatus(true)
        const recived = Array.isArray(data.children) ? { children: data.children[1].replace(/\s/g, ''), type: data.type } : data
        if (state) {
            setSelectedIncludes([...selectedIncludes, recived])
        } else {
            setSelectedIncludes([...selectedIncludes.filter(function (name) {
                return name.children !== recived.children
            })])
        }

    }

    const resetCat = () => {
        setActiveStatus(false)
        setSelectedIncludes([])
    }

    useEffect(() => {
        poolReapeters(selectedIncludes)
    }, [selectedIncludes])

    return (
        <>
            <Title>Швидкий пошук за фiльтрами</Title>
            <Reapeter>
                <Button type={"model"} onActive={onButtonActived} activeStatus={activeStatus}><SiBmw /> BMW</Button>
                <Button type={"model"} onActive={onButtonActived} activeStatus={activeStatus}><SiMercedes /> Mercedes</Button>
                <Button type={"model"} onActive={onButtonActived} activeStatus={activeStatus}><SiAudi /> Audi</Button>
                <Button type={"model"} onActive={onButtonActived} activeStatus={activeStatus}><SiVolkswagen /> Volkswagen</Button>
                <Button type={"model"} onActive={onButtonActived} activeStatus={activeStatus}><SiOpel /> Opel</Button>
            </Reapeter>
            <Reapeter>
                <Button type={"color"} onActive={onButtonActived} activeStatus={activeStatus}>Сiра</Button>
                <Button type={"color"} onActive={onButtonActived} activeStatus={activeStatus}>Бiла</Button>
                <Button type={"color"} onActive={onButtonActived} activeStatus={activeStatus}>Чорна</Button>
                <Button type={"color"} onActive={onButtonActived} activeStatus={activeStatus}>Червона</Button>
                <Button type={"color"} onActive={onButtonActived} activeStatus={activeStatus}>Синя</Button>
                <Button type={"color"} onActive={onButtonActived} activeStatus={activeStatus}>Зелена</Button>
                <Button type={"color"} onActive={onButtonActived} activeStatus={activeStatus}>Жовта</Button>
                <Button type={"color"} onActive={onButtonActived} activeStatus={activeStatus}>Коричнева</Button>
            </Reapeter>
            <Reapeter>
                <Button type={"year"} onActive={onButtonActived} activeStatus={activeStatus}>1990-2000</Button>
                <Button type={"year"} onActive={onButtonActived} activeStatus={activeStatus}>2000-2005</Button>
                <Button type={"year"} onActive={onButtonActived} activeStatus={activeStatus}>2005-2010</Button>
                <Button type={"year"} onActive={onButtonActived} activeStatus={activeStatus}>2010-2013</Button>
                <Button type={"year"} onActive={onButtonActived} activeStatus={activeStatus}>2013-2017</Button>
                <Button type={"year"} onActive={onButtonActived} activeStatus={activeStatus}>2017-2020</Button>
                <Button type={"year"} onActive={onButtonActived} activeStatus={activeStatus}>2020-2023</Button>
            </Reapeter>
            <Reapeter>
                <Button type={"state"} onActive={onButtonActived} activeStatus={activeStatus}>Ідеальний стан</Button>
                <Button type={"state"} onActive={onButtonActived} activeStatus={activeStatus}>Сліди використання</Button>
                <Button type={"state"} onActive={onButtonActived} activeStatus={activeStatus}>Після ДТП</Button>
                <Button type={"state"} onActive={onButtonActived} activeStatus={activeStatus}>На запчастини</Button>
            </Reapeter>
            <Reapeter>
                <Button type={"capacity"} onActive={onButtonActived} activeStatus={activeStatus}>1.6 л</Button>
                <Button type={"capacity"} onActive={onButtonActived} activeStatus={activeStatus}>1.8 л</Button>
                <Button type={"capacity"} onActive={onButtonActived} activeStatus={activeStatus}>1.9 л</Button>
                <Button type={"capacity"} onActive={onButtonActived} activeStatus={activeStatus}>2.0 л</Button>
                <Button type={"capacity"} onActive={onButtonActived} activeStatus={activeStatus}>2.2 л</Button>
                <Button type={"capacity"} onActive={onButtonActived} activeStatus={activeStatus}>2.4 л</Button>
                <Button type={"capacity"} onActive={onButtonActived} activeStatus={activeStatus}>2.6 л</Button>
                <Button type={"capacity"} onActive={onButtonActived} activeStatus={activeStatus}>2.8 л</Button>
            </Reapeter>
            <Reapeter>
                <Button type={"carType"} onActive={onButtonActived} activeStatus={activeStatus}>Універсал</Button>
                <Button type={"carType"} onActive={onButtonActived} activeStatus={activeStatus}>Седан</Button>
                <Button type={"carType"} onActive={onButtonActived} activeStatus={activeStatus}>Хетчбек</Button>
                <Button type={"carType"} onActive={onButtonActived} activeStatus={activeStatus}>Купе</Button>
            </Reapeter>
            <ButtonApplySearchContainer><ButtonApplySearchSubContainer><ButtonApplySearch>Показати {foundedResultsByFilter}</ButtonApplySearch><ButtonApplyReload onClick={resetCat}><IoMdRefresh /></ButtonApplyReload></ButtonApplySearchSubContainer></ButtonApplySearchContainer>
        </>
    )
}

const Reapeter = styled.div`
  display: flex;
  padding-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-basis: auto;
  gap: 0.4em;
`

const ButtonApplySearchContainer = styled.div`
  display: flex;
  padding: 0 20px;
  justify-content: center;
  padding-bottom: 20px;
`

const ButtonApplySearchSubContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 15px;
  gap: 0.5em;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
`

const ButtonApplySearch = styled.button`
  width: 450px;
  background: #cc4343;
  padding: 10px;
  margin-top: 15px;
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
  color: #fff;
    &:hover {
        opacity: 1;
        transition-duration: 300ms;
    }`

const ButtonApplyReload = styled(ButtonApplySearch)`
    width: 35px;
`

const Title = styled.h2`
  margin: 0;
  padding-top: 10px;
  text-align: center;
  padding-bottom: 10px;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  color: #cc4343;
`