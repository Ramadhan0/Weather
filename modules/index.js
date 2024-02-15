import express from 'express'
import userRouter from './user'
import weatherRouter from './weather'

const indexRouter = express.Router()

indexRouter.use('/auth', userRouter)
indexRouter.use('/weather', weatherRouter)

export default indexRouter;