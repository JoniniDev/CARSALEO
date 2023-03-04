import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth, loginUser } from '../../redux/features/auth/authSlice'
import useWindowDimensions from '../../utils/useWindowDimensions'
import ReCAPTCHA from "react-google-recaptcha";
import styled from 'styled-components'

export const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const [recaptcha, setRecaptcha] = useState(false)
  const { width } = useWindowDimensions();

  const { status } = useSelector((state) => state.auth)
  const isAuth = useSelector(checkIsAuth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuth) navigate("/profile")
  }, [isAuth])

  useEffect(() => {
    if (status && status != "Login successful") {
      if (status && status == "Error: Email or password not found") {
        setErrorMsg("Емейл або пароль неправельнi")
      } else if (status && status == "Error: Error while user login") {
        setErrorMsg("Технічна помилка")
      } else {
        setErrorMsg(status)
      }
    }
  }, [status, navigate])

  const handleCaptcha = () => {
    setRecaptcha(true)
  }

  const handleSumbit = () => {
    try {
      if (email && password) {
        if (recaptcha) {
          dispatch(loginUser({ email, password }))
          setEmail("")
          setPassword("")
        } else {
          setErrorMsg("Пройдіть перевірку на робота")
        }
      } else {
        setErrorMsg("Перевірте правильність введених даних")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Form_Container>
      <General_Label>Увiйти</General_Label>
      <General_Form onSubmit={e => e.preventDefault()}>
        <Label className='label'>
          Е-Мейл:
          <div><Input type="text" onChange={(e) => { setEmail(e.target.value.trim()); setErrorMsg(null) }} value={email} placeholder='Ваш Email' /></div>
        </Label>
        <Label className='label'>
          Пароль:
          <div><Input type="password" onChange={(e) => { setPassword(e.target.value.trim()); setErrorMsg(null) }} value={password} placeholder='Ваш пароль' /></div>
        </Label>
        <Controls>
          <ReCAPTCHA
            sitekey="6Ldhsa4kAAAAAKa5ma3h8tDs2G2sawsCNIUIfIlP"
            onChange={handleCaptcha}
            hl="uk"
            size={(width < 400) ? "compact" : "normal"}
          />
          <button type='submit' onClick={handleSumbit}>Увiйти</button><span>Немає облікового запису? <Link className='link' to="/register">Створити</Link></span></Controls>
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
        margin-top: 20px;
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