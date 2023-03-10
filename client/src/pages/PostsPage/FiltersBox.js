import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Filter } from '../../components/Filter/Filter'
import { getAllFilters } from '../../services/filter'

export const FiltersBox = () => {
    const [filters, setFilters] = useState()
    const [selectedBrands, setSelectedBrands] = useState([])
    const [selectedModelsBrand, setSelectedModelsBrand] = useState([])
    const [selectedModels, setSelectedModels] = useState([])
    const [selectedSelectedFuel, setSelectedFuel] = useState([])
    const [selectedSelectedCarType, setSelectedCarType] = useState([])
    const [selectedCity, setSelectedCity] = useState([])
    const [selectedState, setSelectedState] = useState([])
    const [selectedUserType, setSelectedUserType] = useState([])
    const [activity, setActivity] = useState({})

    useEffect(() => {
        filtersCallBack()
    }, [])

    useEffect(() => {
        if (filters) {
            const newModels = []
            for (let index = 0; index < selectedBrands.length; index++) {
                const element = selectedBrands[index];
                const filtredData = filters.brandsAndModels.find(item => item.brand === element)
                newModels.push(...filtredData.models)
            }
            setSelectedModelsBrand(newModels.sort(function (a, b) {
                if (a < b) {
                    return -1;
                }
                if (a > b) {
                    return 1;
                }
                return 0;
            }))
        }
    }, [selectedBrands])

    const filtersCallBack = useCallback(() => {
        getAllFilters().then(({ filters }) => {
            setFilters(filters)
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

    const onSearch = () => {
        console.log([selectedBrands, selectedModels, selectedCity, selectedSelectedCarType, selectedSelectedFuel, selectedState, selectedUserType])
    }

    const onReset = () => {
        setActivity({})
    }

    const onChangeData = (method, data) => {
        method(data.sort(function (a, b) {
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            return 0;
        }))
    }

    return (
        <FilterBox>
            <CategoryBox>
                <Filter
                    activity={activity}
                    type="checkbox"
                    onChangeFilter={(data) => { onChangeData(setSelectedBrands, data) }}
                    data={filters ? filters.brandsAndModels.map(item => item.brand) : null}
                    >??????????</Filter>
            </CategoryBox>
            <CategoryBox>
                <Filter
                    activity={activity}
                    type="checkbox"
                    onChangeFilter={(dataa) => { onChangeData(setSelectedModels, dataa) }}
                    data={selectedModelsBrand}
                    >????????????</Filter>
            </CategoryBox>
            <CategoryBox>
                <Filter
                    activity={activity}
                    type="inputs"
                    inputText="$"
                    max={10000000}
                    >????????</Filter>
            </CategoryBox>
            <CategoryBox>
                <Filter
                    activity={activity}
                    type="checkbox"
                    onChangeFilter={(data) => { onChangeData(setSelectedCarType, data) }}
                    data={filters ? filters.carTypes : null}
                    limit={3}
                    >??????</Filter>
            </CategoryBox>
            <CategoryBox>
                <Filter
                    activity={activity}
                    type="inputs"
                    onChangeFilter={() => { }}
                    inputText="??"
                    min={0.1}
                    max={10}
                    >????????????</Filter>
            </CategoryBox>
            <CategoryBox>
                <Filter
                    activity={activity}
                    type="checkbox"
                    onChangeFilter={(data) => { onChangeData(setSelectedFuel, data) }}
                    data={filters ? filters.fuelTypes : null}
                    >????????????</Filter>
            </CategoryBox>
            <CategoryBox>
                <Filter
                    activity={activity}
                    type="dropdowns"
                    onChangeFilter={() => { }}
                    data={createDates()}
                    >???????? ??????????????</Filter>
            </CategoryBox>
            <CategoryBox>
                <Filter
                    activity={activity}
                    type="checkbox"
                    onChangeFilter={(data) => { onChangeData(setSelectedCity, data) }}
                    data={filters ? filters.cities : null}
                    limit={6}
                >??????????</Filter>
            </CategoryBox>
            <CategoryBox>
                <Filter
                    activity={activity}
                    type="checkbox"
                    onChangeFilter={(data) => { onChangeData(setSelectedCity, data) }}
                    data={filters ? filters.colors : null}
                    limit={6}
                >??????????</Filter>
            </CategoryBox>
            <CategoryBox>
                <Filter
                    activity={activity}
                    type="checkbox"
                    onChangeFilter={(data) => { onChangeData(setSelectedState, data) }}
                    data={filters ? filters.state : null}
                >????????</Filter>
            </CategoryBox>
            <CategoryBox >
                <Filter
                    activity={activity}
                    type="checkbox"
                    onChangeFilter={(data) => { onChangeData(setSelectedUserType, data) }}
                    data={filters ? filters.userTypes : null}
                >?????? ????????????????</Filter>
            </CategoryBox>
            <CategoryBox >
                <Button onClick={onSearch}>??????????</Button>
                <Button onClick={onReset}>??????????????</Button>
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
    height: 25px;
    &:hover {
        opacity: 1;
        transition-duration: 300ms;
    }
    &:first-child {
        margin-bottom: 7px;
    }
    @media (max-width: 768px) {
        height: 35px;
    }
`