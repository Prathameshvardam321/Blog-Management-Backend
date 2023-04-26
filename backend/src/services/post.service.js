import postModel from '../models/post.model';
import { user } from '../middlewares/auth.middleware';
import { log } from 'winston';

export const createPost = async (body) => {
    const data = await postModel.create(body)
    return data
}

export const getAllPost = async () => {
    const data = await postModel.find()
    return data
}

export const updatePost = async (_id, body) => {
    const data = await postModel.findByIdAndUpdate({ "_id": _id }, body, { new: true })
    console.log(data);
    return data
}