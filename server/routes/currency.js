import { Router } from 'express'
import { calcCurrency } from '../controllers/currency.js'

const router = new Router()

// currencyConvert
router.post('/convert', calcCurrency)

export default router