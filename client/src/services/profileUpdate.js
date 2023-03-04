import axios from '../utils/axios'

export const pushAvatar = async (formData) => {
    const { data } = await axios.post("/user/pushphoto", formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    return data
}

export const changeFullName = async (fullName) => {
    const { data } = await axios.post("/user/changeFullName", {fullName})
    return data
}