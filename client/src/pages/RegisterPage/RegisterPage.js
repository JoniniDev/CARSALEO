import React, { useState, useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth, registerUser } from '../../redux/features/auth/authSlice'
import validator from 'validator'

export const RegisterPage = () => {
  const [email, setEmail] = useState("")
  const [fullName, setFullName] = useState("")
  const [password, setPassword] = useState("")
  const [repartPassword, setRepartPassword] = useState("")
  const [errorMsg, setErrorMsg] = useState("")

  const isAuth = useSelector(checkIsAuth)

  const { status } = useSelector((state) => state.auth)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isAuth) navigate("/profile")
  }, [isAuth])

  useEffect(() => {
    if (status && status != "Registration successful") {
      if (status && status == "Error: User already created") {
        setErrorMsg("Користувач з таким е-мейлом вже існує")
      } else if (status && status == "Error: Error while user register") {
        setErrorMsg("Технічна помилка")
      } else {
        setErrorMsg(status)
      }
    }
  }, [status, navigate])

  const handleSumbit = () => {
    try {
      if (email && password && repartPassword && fullName) {
        if (validator.isEmail(email)) {
          if (password === repartPassword) {
            dispatch(registerUser({ email, fullName, password }))
            setEmail("")
            setPassword("")
            setRepartPassword("")
          } else {
            setErrorMsg("Паролі повинні співпадати")
          }
        } else {
          setErrorMsg("Е-мейл некоректний")
        }
      } else {
        console.log("data")
        setErrorMsg("Перевірте правильність введених даних")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Form_Container>
      <General_Label>Зареєструватися</General_Label>
      <General_Form onSubmit={e => e.preventDefault()}>
        <Label>
          Е-Мейл:
          <Input type="text" value={email} onChange={(e) => { setEmail(e.target.value); setErrorMsg(null) }} placeholder='Ваш Email' />
        </Label>
        <Label>
          Прізвище та ім'я:
          <Input type="text" value={fullName} onChange={(e) => { setFullName(e.target.value); setErrorMsg(null) }} placeholder="Ваше прізвище та ім'я" />
        </Label>
        <Label>
          Пароль:
          <Input type="password" value={password} onChange={(e) => { setPassword(e.target.value); setErrorMsg(null) }} placeholder='Ваш пароль' />
        </Label>
        <Label>
          Повтор паролю:
          <Input type="password" value={repartPassword} onChange={(e) => { setRepartPassword(e.target.value); setErrorMsg(null) }} placeholder='Ваш пароль' />
        </Label>
        <Controls><button type='submit' onClick={handleSumbit}>Зареєструватися</button><span>Вже є обліковий запис? <Link className='link' to="/login">Увiйти</Link></span></Controls>
        {errorMsg ? <ErrorMsg>{errorMsg}</ErrorMsg> : null}
      </General_Form>
    </Form_Container>
  )
}

const Form_Container = styled.div`
    display: block;
    margin: 180px auto;
    margin-bottom: 300px;
    max-width: 500px;
    padding-bottom: 40px;
    user-select: none;
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
    margin: 0 50px;
    margin-bottom: 40px;
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
    text-align: center;
    display: block;
    padding-top: 40px;
`

const Label = styled.label`
    display: block;
    width: 100%;
    margin-bottom: 5px;
`

const Input = styled.input`
    margin-top: 8px;
    width: 100%;
    border: none;
    background: none;
    font-family: inherit;
    font-size: 14px;
    outline: none;
    color: #fff;
    height: 30px;
    box-sizing: border-box;
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0);
    transition-property: box-shadow;
    transition-duration: 200ms;
    &:focus {
        color: #fff;
        height: 30px;
        box-sizing: border-box;
        box-shadow: 0px 2px 0px 0px #fff;
        transition-property: box-shadow;
        transition-duration: 300ms;
    }
    &::placeholder {
        color: #cfcccc;
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