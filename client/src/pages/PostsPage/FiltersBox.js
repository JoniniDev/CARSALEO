import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Filter } from '../../components/Filter/Filter'
import { getAllFilters } from '../../services/filter'

export const FiltersBox = () => {
    const [filters, setFilters] = useState()

    useEffect(() => {
        filtersCallBack()
    }, [])

    const filtersCallBack = useCallback(() => {
        getAllFilters().then((data) => {
            setFilters(data)
        })
    })

    const createDates = () => {
        const date = new Date()
        let array = []
        for (let index = 0; index < 101; index++) {
            array.push({ value: date.getFullYear() - index, label: date.getFullYear() - index })
        }
        return array
    }

    return (
        <FilterBox>
            <CategoryBox>
                <Filter
                    type="checkbox" >Бренд</Filter>
            </CategoryBox>
            <CategoryBox>
                <Filter
                    type="checkbox" inputText="$" min={undefined} max={10000000}>Модель</Filter>
            </CategoryBox>
            <CategoryBox>
                <Filter
                    type="inputs" inputText="$" max={10000000}>Ціна</Filter>
            </CategoryBox>
            <CategoryBox>
                <Filter
                    type="checkbox"
                    data={["Седан", "Універсал", "Хетчбек", "Купе", "Кросовер", "Кабріолет", "Мінівен", "Пікап", "Лімузин", "Ліфтбек", "Родстер", "Фастбек", "Мікровен"]}
                    limit={3}>Тип</Filter>
            </CategoryBox>
            <CategoryBox>
                <Filter
                    type="inputs"
                    inputText="л"
                    min={0.1}
                    max={10}>Двигун</Filter>
            </CategoryBox>
            <CategoryBox>
                <Filter
                    type="checkbox"
                    data={["Бензин", "Газ", "Дизель", "Електро"]}>Паливо</Filter>
            </CategoryBox>
            <CategoryBox>
                <Filter
                    type="dropdowns"
                    data={createDates()}>Роки випуску</Filter>
            </CategoryBox>
            <CategoryBox>
                <Filter
                    type="checkbox"
                    data={filters ? filters.filters.cities : null}
                    limit={6}
                    >Регіон</Filter>
            </CategoryBox>
            <CategoryBox>
                <Filter
                    type="checkbox"
                    data={["Ідеальний стан", "Сліди використання", "Після ДТП", "На запчастини"]}>Стан</Filter>
            </CategoryBox>
            <CategoryBox >
                <Filter
                    type="checkbox"
                    data={["Користувач", "Дилер"]}>Тип продавця</Filter>
            </CategoryBox>
            <CategoryBox >
                <Button>Пошук</Button>
                <Button>Скинути</Button>
            </CategoryBox>
        </FilterBox >
    )
}

// const Title = styled.div`
//     margin-left: 5px
// `

const FilterBox = styled.div`
    width: 30%;
    box-sizing: border-box;
    @media (max-width: 768px) {
        width: 100%;
        height: 100%;
        padding-left: 10px;
        padding-right: 10px;
    }
`

const CategoryBox = styled.div`
    margin-bottom: 10px;
    padding: 7px;
    box-sizing: border-box;
    width: 100%;
    height: max-content;
    background: #cc4343;
    border-radius: 5px;
`

const Button = styled.button`
    width: 100%;
    background: #fff;
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
    }
    &:first-child {
        margin-bottom: 7px;
    }
`