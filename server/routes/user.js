import { Router } from 'express'
import { pushAvatar, changeFullName } from '../controllers/user.js'
import { checkAuth } from '../utils/checkAuth.js'

const router = new Router()

// Push avatar
router.post('/pushphoto', checkAuth, pushAvatar)

// Change fullname
router.post('/changeFullName', checkAuth, changeFullName)

export default router