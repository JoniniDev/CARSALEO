import React, { useState, useEffect, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { InputFilter, Input as InputFromFilter } from '../../components/Filter/InputFilter'
import { PhotosLoader } from './PhotosLoader'
import { DropdownFilter, Select } from '../../components/Filter/DropdownFilter'
import { getAllFilters } from '../../services/filter'

export const Form = ({ onFormChanged }) => {
    const [selecterData, setSelecterData] = useState()
    const [errorMsg, setErrorMsg] = useState("")
    const [modelByBrand, setModelByBrand] = useState([])
    const [brand, setBrand] = useState("")
    const [model, setModel] = useState("")
    const [activity, setActivity] = useState({})
    const [price, setPrice] = useState("")
    const [carType, setCarType] = useState("")
    const [color, setColor] = useState("")
    const [mileage, setMileage] = useState("")
    const [carNumber, setCarNumber] = useState("")
    const [vinNumber, setVinNumber] = useState("")
    const [capacity, setCapacity] = useState("")
    const [fuel, setFuel] = useState("")
    const [year, setYear] = useState("")
    const [region, setRegion] = useState("")
    const [state, setState] = useState("")
    const [description, setDescription] = useState("")
    const [images, setImages] = useState([])

    useEffect(() => {
        filtersCallBack()
    }, [])

    useEffect(() => {
        setModel("")
        setActivity(brand)
        const findedModel = selecterData ? selecterData.brandsAndModels.find(item => item.brand === brand) : null
        setModelByBrand(findedModel ? findedModel.models.map(item => { return { label: item, value: item } }) : null)
    }, [brand])

    // useEffect(() => {
    //     handleLoadPhoto(images)
    // }, [images])

    useEffect(() => {
        if (onFormChanged) {
            onFormChanged({
                brand, model, price, carType, color, mileage, carNumber, vinNumber, capacity, fuel, year, region, state, description, images
            })
        }
    }, [brand, model, price, carType, color, mileage, carNumber, vinNumber, capacity, fuel, year, region, state, description, images])

    const patternHandler = (value, method, pattern) => {
        method(value.replace(pattern, ""))
    }

    const filtersCallBack = useCallback(() => {
        getAllFilters().then(({ filters }) => {
            setSelecterData(filters)
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
        <>
            <Form_Container>
                <Small_Label>Редагування</Small_Label>
                <Chapter><p>1. Основна інформація про автомобіль</p><hr /></Chapter>
                <SubContainer>
                    <Label>
                        Бренд:
                        <StyledDropdownFilter onModificate={setBrand} data={selecterData ? selecterData.brandsAndModels.map(item => { return { label: item.brand, value: item.brand, } }) : null} validate />
                    </Label>
                    <Label>
                        Модель:
                        <StyledDropdownFilter onModificate={setModel} activity={activity} data={modelByBrand} validate />
                    </Label>
                    <Label>
                        Ціна:
                        <LabelContainer><StyledInputFilter onValue={setPrice} placeholderText="Ваша ціна" validate /><div>$</div></LabelContainer>
                    </Label>
                    <Label>
                        Пробіг:
                        <LabelContainer><StyledInputFilter onValue={setMileage} placeholderText="123 000" validate /><span>км</span></LabelContainer>
                    </Label>
                    <Label>
                        Двигун:
                        <LabelContainer><StyledInputFilter onValue={setCapacity} value={capacity} contextmin={0.1} contextmax={10} placeholderText="2.2" validate /><span>л</span></LabelContainer>
                    </Label>
                    <Label>
                        Паливо:
                        <StyledDropdownFilter onModificate={setFuel} data={selecterData ? selecterData.fuelTypes.map(item => { return { label: item, value: item, } }) : null} validate />
                    </Label>
                    <Label id='addPhoto'>
                        Рік випуску:
                        <StyledDropdownFilter onModificate={setYear} data={createDates()} validate />
                    </Label>
                    <Label>
                        Місто:
                        <StyledDropdownFilter onModificate={setRegion} data={selecterData ? selecterData.cities.map(item => { return { label: item, value: item, } }) : null} validate />
                    </Label>
                    <Label>
                        Державний номер:
                        <Input type="text" maxLength={8} placeholder='АА0000ВХ' value={carNumber} onChange={e => { patternHandler(e.target.value.toUpperCase(), setCarNumber, /[^0-9АВЕКМНОРСТУХІABEKMHOPCTYXZDI]/gi) }} validate />
                    </Label>
                    <Label>
                        VIN-Код:
                        <Input type="text" maxLength={17} placeholder='Y6D1103078XXXXXXX' value={vinNumber} onChange={e => { patternHandler(e.target.value.toUpperCase(), setVinNumber, /[^a-zA-Z0-9]/gi) }} validate />
                    </Label>
                </SubContainer>
                <Label>
                    Зоображення ({images.length}/25):
                    <PhotosLoader onPhotosChange={setImages} />
                </Label>
                <Label>
                    Опис:
                    <InputArea maxLength={1500} value={description} onChange={(e) => setDescription(e.target.value)} cols="10" rows="5" placeholder='Опишіть ваше авто, можете додайти цікаві деталі, наприклад комплектація авто, відчуття від його керування та інше..' />
                    <span>Максимум {1500 - description.length} символів</span>
                </Label>
                <Chapter><p>2. Додаткова інформація про автомобіль (Не обов'язково)</p> <hr /></Chapter>
                <Label>
                    Колір:
                    <StyledDropdownFilter onModificate={setColor} data={selecterData ? selecterData.colors.map(item => { return { label: item.text, value: JSON.stringify(item), } }) : null} />
                </Label>
                <Label>
                    Тип:
                    <StyledDropdownFilter onModificate={setCarType} data={selecterData ? selecterData.carTypes.map(item => { return { label: item, value: item, } }) : null} />
                </Label>
                <Label>
                    Стан:
                    <StyledDropdownFilter onModificate={setState} data={selecterData ? selecterData.state.map(item => { return { label: item, value: item, } }) : null} />
                </Label>
            </Form_Container>
        </>
    )
}

const SubContainer = styled.div`
    width: 100%;
    max-width: 275px;
`

const Chapter = styled.div`
    display: flex;
    gap: 10px;
    font-size: 19px;
    flex-wrap: nowrap;
    padding-top: 10px;
    margin-bottom: 15px;
    p {
      margin: 0;
      padding: 0;
      white-space: nowrap;
      @media (max-width: 520px) {
        white-space: normal;
      }
    }
    hr {
      border:none;
      border-top: 2px solid white;
      width: 100%;
    }
    @media (max-width: 550px) {
        flex-wrap: wrap;
    }
`

const Form_Container = styled.form`
    display: block;
    margin: 10px auto;
    width: 100%;
    padding-bottom: 10px;
`

const General_Label = styled.h1`
    width: 100%;
    display: block;
    padding: 10px 0;
    margin: 0;
`

const Small_Label = styled(General_Label)`
    font-size: 21px;
    padding: 10px 0px;
`

const Label = styled.div`
    display: flex;
    padding: 5px 0px;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 5px;
    span {
        font-size: small;
    }
`

const LabelContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    width: 100%;
      max-width: 250px;
`

const Input = styled.input`
    width: 100%;
    max-width: 250px;
    border: none;
    border-bottom: 1px solid;
    border-radius: 2px;
    background: none;
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    outline: none;
    color: #fff;
    height: 35px;
    box-sizing: border-box;
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0);
    transition-property: box-shadow;
    transition-duration: 200ms;
    &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    }
    &:focus {
        color: #fff;
        box-sizing: border-box;
        box-shadow: 0px 2px 0px 0px #fff;
        transition-property: box-shadow;
        transition-duration: 300ms;
    }
    &::placeholder {
        color: #cfcccc;
    }
`

const InputArea = styled.textarea`
    width: 100%;
    border: none;
    border-bottom: 1px solid;
    border-right: 1px solid;
    border-left: 1px solid;
    border-radius: 2px;
    background: none;
    padding: 3px 5px;
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    outline: none;
    color: #fff;
    box-sizing: border-box;
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0);
    transition-property: box-shadow;
    transition-duration: 200ms;
    &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    }
    &:focus {
        color: #fff;
        box-sizing: border-box;
        box-shadow: 0px 2px 0px 0px #fff;
        transition-property: box-shadow;
        transition-duration: 300ms;
    }
    &::placeholder {
        color: #cfcccc;
    }
    height: 150px;
    resize: none;
`

const StyledDropdownFilter = styled(DropdownFilter)`
    ${Select} {
      height: 35px;
      width: 100%;
      max-width: 250px;
    }
`

const StyledInputFilter = styled(InputFilter)`
    ${InputFromFilter} {

    }
`