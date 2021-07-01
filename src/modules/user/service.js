import Userschema from './schema'
import conectToDatabase from '../../utils/conectToDatabase'

export const createUser = async (userdata) => {
    await conectToDatabase()
  return  Userschema.create({ ...userdata })
}