import axios from "axios"
import fs from 'fs'

export const allFilters = async (req, res) => {
    const filter = JSON.parse(fs.readFileSync('./jsonData/filters.json', 'utf8'));
    console.log(filter)
    try {
        res.status(200).json({
            filter
        })
    } catch (error) {
        res.status(500).json({
            msg: "Error: Error while calculate currency"
        })
    }
}
