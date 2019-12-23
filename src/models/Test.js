import  mongoose, { Schema } from 'mongoose'

const testSchema = new Schema({
  name: {
    type: String,
    required: true
  }
})

export const Test = mongoose.model('Test', testSchema)