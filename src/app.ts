import 'express-async-errors'
import express from 'express'
import cors from 'cors'

import { errorsHandler } from './errors'
import { routes } from './routes'

import './config/database'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)

app.use(errorsHandler)

export { app }
