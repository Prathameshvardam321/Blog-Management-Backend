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

export const deletePost = async (body) => {
    const data = await postModel.findOneAndDelete({ "_id": body.params.id })
    return data
}

export const likePost = async (id, email) => {
    console.log(id, "ID");

    const data = await postModel.findById(id)

    console.log(email, "from like post ===>26");

    const { Likes } = data
    let data1

    if (await Likes.includes(email)) {
        data1 = await postModel.findByIdAndUpdate({ "_id": id },
            {
                $pull: { Likes: email },
            
            },
            { new: true })
        data1 = await postModel.findByIdAndUpdate({ "_id": id },
            { NumberOfLikes: data1.Likes.length }, { new: true }
        )
    } else {
        data1 = await postModel.findByIdAndUpdate({ "_id": id },
            {
                $push: { Likes: email },
                
            },
            { new: true })
        data1 = await postModel.findByIdAndUpdate({ "_id": id },
            { NumberOfLikes: data1.Likes.length }, { new: true }
        )
    }

    return data1
}

export const numberOfLikes = async (body) => {
    const data = await postModel.findOne({ "_id": body.params.id })
    const length = await postModel.findByIdAndUpdate({ "_id": body.params.id },
        { NumberOfLikes: data.Likes.length }, { new: true }
    )
    console.log(length, "Length of likes");
    return length
}

export const viewPost = async (req) => {
    const data = await postModel.findOne({ "_id": req.params.id })
    console.log(req.body.Email, "REQWSmskEMail",data);
    let data1
    if (!data.Views.includes(req.body.Email)) {
        console.log("Enter into add view");
        data1 = await postModel.findByIdAndUpdate({ "_id": req.params.id },
            { $push: { Views: user.email } },
            { new: true })
        return data1
    }
    else {
        console.log("Already added");
        return data
    }

}


export const findMyLikedPost = async (email) => {

    const getAllPost = await postModel.find()
    const myLikedData = getAllPost.filter((x) => x.Likes.includes(email))
    return myLikedData
}

export const findMyPost = async (email) => {
    const allPost = await postModel.find()
    const myPost = allPost.filter((x) => x.Email == email)
    return myPost
}

export const getPostById = async (req) => {
    const post = await postModel.find({ "_id": req.params.id })
    return post
}

export const findPostByText = async (searchText)=>{
   
  
        const data = await postModel.find({
          $or: [
            {
                Title: { $regex: searchText, $options: 'i' }
            },
            {
                Description: { $regex: searchText, $options: 'i' }
            },
            {
                Email: { $regex: searchText, $options: 'i' }
            }
          ]
        })
        return data
      
}
