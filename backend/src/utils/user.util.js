import bcrypt from 'bcrypt'
import User from '../models/user.model';


export const checkEmail = async (body, data) => {
    const {  email, password,fullName } = body
    if (data === null) {
        const hashedPassword = await bcrypt.hash(password, 10)
        const data = await User.create({
            fullName,
            email,
            password: hashedPassword
        })
        return data;

    } else   {
        throw new Error("Email already registered")
    }
   
}
