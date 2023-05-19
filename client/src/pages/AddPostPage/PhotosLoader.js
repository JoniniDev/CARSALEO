import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { Photo } from './Photo'
import { v4 as uuid } from 'uuid'

export const PhotosLoader = ({ onPhotosChange }) => {
    const [photos, setPhotos] = useState([])
    const [selectedPhoto, setSelectedPhoto] = useState()
    const [error, setError] = useState("")

    const inputRef = useRef(null);

    const handleUpdatePhoto = (e) => {
        if (photos.length < 25) {
            if (e.target.files[0]) {
                const file = e.target.files[0]
                if (file.size > 4194300) {
                    setError("Зоображення дуже велике!")
                    inputRef.current.value = null
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
                    reader.onloadend = () => {
                        const base64data = reader.result;
                        setPhotos(state => [...state, { id: uuid(), data: base64data, photoData: file }])
                    }
                }
            }
        } else {
            setError("Неможливо завантажити більше 25 зоображень")
        }
        inputRef.current.value = null
    }

    useEffect(() => {
        if (onPhotosChange) {
            onPhotosChange(photos)
        }
    }, [photos])

    const onDelete = (delPhoto) => {
        setPhotos(state => state.filter(item => item.id != delPhoto))
    }

    return (
        <div>
            <PhotosContainer>
                {photos.map((item, index) => {
                    return (
                        <Photo key={item.id} photo={item} onDelete={onDelete} />
                    )
                })}
            </PhotosContainer>
            <InputFile>
                <input id="input" ref={inputRef} accept=".png, .jpg, jpeg, .jfif, .gif" type="file" onChange={handleUpdatePhoto} />
                Завантажити
            </InputFile>
            {error == "" ? null : <Error>{error}</Error>}
        </div>
    )
}

const PhotosContainer = styled.div`
    display: flex;
    margin-bottom: 10px;
    width: 100%;
    height: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
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
    width: 100%;
    max-width: 275px;
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