import Mongoose  from 'mongoose'
import 'dotenv/config'

Mongoose.Promise = global.Promise

const connectToDb = async () => {
  const {DB_HOST, DB_PORT, DB_NAME} = process.env
  try {
    await Mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, { useNewUrlParser: true })
    console.log('MongoDB successfully connected')
  }
  catch (err) {
    console.log(err.message)
  }
}

export default connectToDb


