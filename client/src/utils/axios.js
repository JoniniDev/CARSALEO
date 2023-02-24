import axois from 'axios'

const instance = axois.create({
    baseURL: 'http://localhost:3002/api',
})

instance.interceptors.request.use(config => {
    config.headers.Authorization = window.localStorage.getItem("token")
    return config
})

export default instance