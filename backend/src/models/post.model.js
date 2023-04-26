import { Schema, model } from 'mongoose';
const postSchema = new Schema(
    {
        Title: {
            type: String,
            require: true
        },
        Description: {
            type: String,
            require: true
        },
        Email: {
            type: String
        },
        Likes: {
            type: [String],

        },
        date: {
            type: Date,
            default: Date.now()
        },
        NumberOfLikes: {
            type: Number,
            default: 0
        },
        Type: {
            type: String,
            default: "Other"
        },
        Views:{
            type: [String],
          
        }
    },
    {
        timestamps: true
    }
);


export default model('UsersBlogManagementPost', postSchema);