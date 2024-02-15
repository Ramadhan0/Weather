import express from 'express'
import { login, registerUser } from './user.controller'
import { validateEmailMiddleware } from '../../middlewares/checkIfEmailValid'

const userRouter = express.Router()

userRouter.get('/login', login)
userRouter.get('/register', validateEmailMiddleware, registerUser)

export default userRouter;
