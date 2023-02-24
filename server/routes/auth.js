import { Router } from 'express'
import { reg, log, getUser } from '../controllers/auth.js'
import { checkAuth } from '../utils/checkAuth.js'

const router = new Router()

// Reg
router.post('/reg', reg)

// Log
router.post('/log', log)

// Get Me
router.get('/getUser', checkAuth, getUser)

export default router