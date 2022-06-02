import mongoose from 'mongoose'
const { Schema } = mongoose

const userAccountSchema = new Schema({
  user_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

export default mongoose.model('UserAccount', userAccountSchema)