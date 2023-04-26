import User from '../models/user.model';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import logger, { logStream } from '../config/logger';
import { checkEmail } from '../utils/user.util';


export const getAllUsers = async () => {
  const data = await User.find();
  return data;
};


export const register = async (body) => {
  try {
    const { email } = body
    const data = await User.findOne({ email })
    console.log(data);
    return checkEmail(body, data)
  } catch (error) {
    logger.error(error);
  }
}

export const login = async (body) => {
  const { email, password } = body
  const data = await User.findOne({ email })
  const result = await bcrypt.compare(password, data.password)
  if (data) {
    if (result) {
      const token = await jwt.sign({ Id: data._id, email: data.email }, process.env.SECRET_KEY)
      return token;
    } else {
      throw new Error('Wrong credentials')
    }
  } else {
    throw new Error("Details not found")
  }
}



