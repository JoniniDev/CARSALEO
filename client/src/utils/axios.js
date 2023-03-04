import axois from 'axios'
import { serverEndpoint } from './variables'

const instance = axois.create({
    baseURL: `${serverEndpoint}api`,
})

instance.interceptors.request.use(config => {
    config.headers.Authorization = window.localStorage.getItem("token")
    config.headers.AccessControlAllowOrigin = "*"
    return config
})

export default instance