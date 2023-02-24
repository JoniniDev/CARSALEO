import { Router } from 'express'
import { allFilters } from '../controllers/filters.js'

const router = new Router()

router.get('/', allFilters)

export default router