import express from 'express'
import bodyParser from 'body-parser'
import 'dotenv/config'
import connectToDb from './db/connect'
import { testController } from './controllers/Test'

const app = new express();

app.use(bodyParser.json())

app.use('/test', testController)

if(connectToDb()) {
  app.listen(process.env.PORT, () => { 
    console.log(`Server running on Port: ${process.env.PORT}`)
  })
} else {
  console.log('Error!!!')
}

export default app