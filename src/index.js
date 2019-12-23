import express from 'express'
import 'dotenv/config'
import { testController } from './controllers/Test'

const app = new express();

app.use('/test', testController)

app.listen(process.env.PORT, () => { console.log(`Server running on port: ${process.env.PORT}`)})