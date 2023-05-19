import React, { useState, useEffect, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth } from '../../redux/features/auth/authSlice'
import { createPost } from '../../redux/features/post/postSlice'
import { Form } from './Form'
import { PreviewPost } from './PreviewPost'
import { convertUSDtoUAH } from '../../services/currency'
import { HashLink } from 'react-router-hash-link';

export const AddPostPage = () => {
    const [form, setForm] = useState()
    const [priceUAH, setPriceUAH] = useState(0)
    const [errorMsg, setErrorMsg] = useState("")
    const [terms, setTerms] = useState(false)

    const isAuth = useSelector(checkIsAuth)

    const navigate = useNavigate()

    const { status } = useSelector((state) => state.auth)

    const dispatch = useDispatch()

    useEffect(() => {
        setErrorMsg("")
        convert()
    }, [form])

    const convert = useCallback(
        () => {
            if (form && form.price) {
                convertUSDtoUAH(form.price).then(({ result }) => {
                    setPriceUAH(result)
                })
            }
        }
    )

    const handleSumbit = () => {
        try {
            const error = []
            for (const [key, value] of Object.entries(form)) {
                if (key !== "color" && key !== "carType" && key !== "state") {
                    if ((Array.isArray(value) && !value.length) || ((typeof value === "string" || typeof value === "number") && !value)) {
                        error.push(key)
                    }
                }
            }
            if (terms) {
                if (error.length) {
                    <HashLink to={`/new#${error[0]}`}></HashLink>
                    setErrorMsg(`Помилка! Перевірте заповнені дані`)
                } else {
                    const formData = new FormData()
                    for (const [key, value] of Object.entries(form)) {
                        if (key !== "images") {
                            if (key === "price") {
                                formData.append("priceUSD", value)
                                formData.append("priceUAH", priceUAH)
                            } else if (key === "color") {
                                formData.append(key, JSON.parse(value).text)
                            } else {
                                formData.append(key, value)
                            }
                        }
                    }
                    for (let index = 0; index < form.images.length; index++) {
                        formData.append("image", form.images[index].photoData)
                    }
                    dispatch(createPost({ formData }))
                    navigate("/posts")
                }
            } else {
                setErrorMsg(`Прочитайте та погодтеся з умовами використання для створення оголошення про продаж авто`)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <SubHeader>
                <Title>Створення нового оголошення</Title>
            </SubHeader>
            <Form_Container>
                <Small_Label>Попередній перегляд</Small_Label>
                {form ? <PreviewPost {...form} /> : null}
            </Form_Container>
            <General_Form>
                <Form onFormChanged={setForm} />
                <Controls>
                    <TermsGroup>
                        <input type="checkbox" id="terms" onChange={() => { setTerms(!terms) }} />
                        <span>
                            <label htmlFor="terms">
                                Погоджуюсь з
                            </label>
                            <Link to={"/terms-conditions?type=createPost"} target="_blank" style={{ color: "#fff", textDecorationLine: "underline" }}>
                                умовами використання для створення оголошення про продажу авто
                            </Link>
                        </span>
                    </TermsGroup>
                    <button type='button' onClick={handleSumbit}>Створити</button>
                </Controls>
                {errorMsg ? <ErrorMsg>{errorMsg}</ErrorMsg> : null}
            </General_Form>
        </>
    )
}

const SubHeader = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background: #cc4343;
`

const Title = styled.h2`
    margin: 10px 0;
    padding: 10px;
`

const Form_Container = styled.div`
    display: block;
    margin: 10px auto;
    width: 100%;
    padding: 0 10px;
    padding-bottom: 10px;
    user-select: none;
    box-sizing: border-box;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    border-radius: 5px;
    background: #cc4343;
`

const General_Form = styled.form`
    display: block;
    position: relative;
    margin: 10px auto;
    width: 100%;
    padding: 0 10px;
    padding-bottom: 10px;
    user-select: none;
    box-sizing: border-box;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    border-radius: 5px;
    background: #cc4343;
    @keyframes ani {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`

const General_Label = styled.h1`
    width: 100%;
    display: block;
    padding: 10px 0;
    margin: 0;
`

const Small_Label = styled(General_Label)`
    font-size: 21px;
    padding: 10px 2px;
`

const Controls = styled.div`
    font-size: 16px;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 12px;

    button {
        width: 100%;
        background: #fff;
        padding: 10px;
        margin-bottom: 10px;
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
    }

    .link {
        box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0);
        transition-property: box-shadow;
        transition-duration: 200ms;
        color: #fff;
        &:hover {
            box-shadow: 0px 2px 0px 0px #fff;
            transition-property: box-shadow;
            transition-duration: 300ms;
        }
    }
`

const TermsGroup = styled.div`
    display: flex;
    margin-bottom: 10px;
    align-items: flex-start;
    input {
        margin-right: 8px;
    }
    span {
        display: block;
        margin: auto;
        width: 100%;
        color: #fff;
    }
`

const ErrorMsg = styled.div`
    width: 100%;
    text-align: center;
    font-weight: inherit;
    font-size: 16px;
    opacity: 0;
    border-bottom: 2px solid;
    animation: ani 0.3s forwards;
    margin-top: 10px;
    padding-bottom: 5px;
`