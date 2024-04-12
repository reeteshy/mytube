import express from 'express'
import userControllder from '../controllers/userController.js'

const { registerUser } = userControllder

const router = express.Router()

router.route('/register').post(registerUser)

export default router