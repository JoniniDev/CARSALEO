import React, { useState, useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth, registerUser } from '../../redux/features/auth/authSlice'
import { Form } from './Form'
import { PreviewPost } from './PreviewPost'
import { InputFilter, Input as InputFromFilter } from '../../components/Filter/InputFilter'
import { DropdownFilter, Select } from '../../components/Filter/DropdownFilter'
import validator from 'validator'

export const AddPostPage = () => {
  const [form, setForm] = useState()
  const [errorMsg, setErrorMsg] = useState("")

  const isAuth = useSelector(checkIsAuth)

  const { status } = useSelector((state) => state.auth)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (status && status != "Registration successful") {
      if (status && status == "Error: User already created") {
        setErrorMsg("Користувач з таким е-мейлом вже існує")
      } else if (status && status == "Error: Error while user register") {
        setErrorMsg("Технічна помилка")
      } else {
        setErrorMsg(status)
      }
      if (isAuth) navigate("/profile")
    }
  }, [status, navigate, isAuth])

  // const handleSumbit = () => {
  //   try {
  //     if (email && password && repartPassword && fullName) {
  //       if (validator.isEmail(email)) {
  //         if (password === repartPassword) {
  //           // dispatch(registerUser({ email, fullName, password }))
  //           // setEmail("")
  //           // setPassword("")
  //           // setRepartPassword("")
  //         } else {
  //           setErrorMsg("Паролі повинні співпадати")
  //         }
  //       } else {
  //         setErrorMsg("Е-мейл некоректний")
  //       }
  //     } else {
  //       console.log("data")
  //       setErrorMsg("Перевірте правильність введених даних")
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <>
      <SubHeader>
        <Title>Створення нового оголошення</Title>
      </SubHeader>
      <Form_Container>
        <Small_Label>Попередній перегляд</Small_Label>
        {form ? <PreviewPost {...form} /> : null}
      </Form_Container>
      <General_Form onSubmit={e => e.preventDefault()}>
        <Form onFormChanged={setForm}/>
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

const Label = styled.label`
    display: flex;
    padding: 5px 0px;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 5px;
`

const LabelContainer = styled.div`
    display: flex;
    align-items: flex-end;
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

const StyledDropdownFilter = styled(DropdownFilter)`
    ${Select} {
      height: 35px;
      width: 100%;
      max-width: 250px;
    }
`

const StyledInputFilter = styled(InputFilter)`
    ${InputFromFilter} {
      width: 100%;
      max-width: 250px;
    }
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

    span {
        display: block;
        text-align: center;
        margin: auto;
        width: 100%;
        color: #fff;
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

const ErrorMsg = styled.span`
    position: absolute;
    width: 100%;
    text-align: center;
    font-weight: inherit;
    font-size: 16px;
    opacity: 0;
    border-bottom: 2px solid;
    animation: ani 0.3s forwards;
    margin-top: 20px;
    padding-bottom: 5px;
`