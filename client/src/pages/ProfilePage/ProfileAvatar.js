import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { pushAvatar } from '../../services/profileUpdate'
import { getMe } from '../../redux/features/auth/authSlice'
import { serverEndpoint } from '../../utils/variables'

export const ProfileAvatar = ({ onChanged }) => {
    const [avatar, setAvatar] = useState(null)
    const [error, setError] = useState("")
    // const [error, setError] = useState(null)
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)

    useEffect(() => {
        setAvatar(`${serverEndpoint}/avatars/${user.avatar}`)
    }, [])

    const pushAvatarCallback = useCallback(
        formData => {
            pushAvatar(formData).then((data) => {
                dispatch(getMe())
            })
        }, []
    )

    const handleUpdateAvatar = (e) => {
        if (e.target.files[0]) {
            const file = e.target.files[0]
            if (file.size > 2097152) {
                setError("Зоображення дуже велике!")
                return false
            }
            setError("")
            const idxDot = file.name.lastIndexOf(".") + 1;
            const extFile = file.name.substr(idxDot, file.name.length).toLowerCase();
            if (extFile == "jpg" || extFile == "gif" || extFile == "png" || extFile == "jpeg" || extFile == "jfif") {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                const formData = new FormData();
                formData.append("image", e.target.files[0]);
                pushAvatarCallback(formData)
                reader.onloadend = () => {
                    const base64data = reader.result;
                    setAvatar(base64data)
                    onChanged()
                }
            }
        }
    }

    return (
        <Container>
            <ImageContainer>
                <Avatar src={avatar} />
                <Caption>Рекомедовані розміри: 512х512px<br />Макс. розмір файлу: 2 МБ</Caption>
                <InputFile>
                    <input accept=".png, .jpg, jpeg, .jfif, .gif" type="file" onChange={e => handleUpdateAvatar(e)} />
                    Завантажити
                </InputFile>
                {error == "Зоображення дуже велике!" ? <Error>{error}</Error> : null}
            </ImageContainer>
        </Container>
    )
}

const Container = styled.div`
    margin-left: 10px;
    margin-bottom: 10px;
`

const Avatar = styled.img`
    width: 180px;
    height: 180px;
    object-fit: cover;
    object-position: center center;
    @media (max-width: 240px) {
        width: 100%;
        height: 60vw;
        min-width: 50px;
        min-height: 50px;
    }
`

const Caption = styled.div`
    font-size: 11px;
    margin-bottom: 8px;
`

const ImageContainer = styled.div`
    width: 100%;
    max-width: 180px;
    box-sizing: border-box;
`

const Error = styled.span`
    margin: 0;
    padding: 0;
    font-size: 12px;
`

const InputFile = styled.label`
    display: block;
    cursor: pointer;
    margin-bottom: 8px;
    box-sizing: border-box;
    font-size: 14px;
    padding: 5px;
    color: #cc4343;
    text-align: center;
    background: #fff;
    border-radius: 5px;
    opacity: 0.9;
    transition-property: opacity;
    transition-duration: 200ms;
    color: #cc4343;
    &:hover {
        opacity: 1;
        transition-duration: 300ms;
    }
    input {
        display: none;
    }
`