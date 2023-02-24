import axios from "axios"

export const calcCurrency = async (req, res) => {
    try {
        const { amount } = req.body

        if (!amount) {
            return res.status(400).json({
                msg: 'Error: Data not valid'
            })
        }
        
        const currency = await axios.get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")

        res.json({
            result: amount * currency.data.find((item) => item.cc === "USD").rate.toFixed(2),
            msg: "Successful convert"
        })

    } catch (error) {
        res.status(500).json({
            msg: "Error: Error while calculate currency"
        })
    }
}
