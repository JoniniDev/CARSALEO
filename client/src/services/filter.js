import axios from '../utils/axios'

export const getAllFilters = async () => {
    const { data } = await axios.get("/filters")
    return data
}