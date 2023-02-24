import { Router } from 'express'
import { createPost } from '../controllers/posts.js'
import { checkAuth } from '../utils/checkAuth.js'

const router = new Router()

// Create post
router.post('/createPost', checkAuth, createPost)

// 

export default router