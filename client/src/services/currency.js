import axios from '../utils/axios'

export const convertUSDtoUAH = async (usd) => {
    const { data } = await axios.post("/currency/convert", {amount: usd})
    return data
}