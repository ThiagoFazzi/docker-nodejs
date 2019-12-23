import  mongoose, { Schema } from 'mongoose'

const testSchema = new Schema({
  _id: {

  },
  name: {
    type: string,
    required: true
  }
})

export const Test = mongoose.model('Test', testSchema)