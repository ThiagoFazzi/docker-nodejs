import express from 'express'
import bodyParser from 'body-parser'
import 'dotenv/config'
import { testController } from './controllers/Test'
import connectToDb from './db/connect'

connectToDb()

const app = new express();

app.use(bodyParser.json())

app.use('/test', testController)


app.listen(process.env.PORT, () => { console.log(`Server running on port: ${process.env.PORT}`)})

export default app