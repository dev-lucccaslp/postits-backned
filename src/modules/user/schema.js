import mongoose from 'mongoose'

const Userschema = new mongoose.Schema({
  firstName: { type: 'string', required: true},
  lastName: { type: 'string', required: true},
  email: { type: 'string', required: true, unique: true},
  password: { type: 'string'},

})

export default mongoose.models.User || mongoose.model('User', Userschema) 