import { number, string } from '@hapi/joi';
import { Mongoose, Schema, model } from 'mongoose';

const finalCommentSchema = new Schema(
    {

       
        Comment1: {
            type: String
        },
        Likes: {
            type: [String],
          },
        NumberOfLikes: {
            type: Number,
            default: 0
        },
        Author: {
            type: String
        },
        CommentParentId: {
            type: String,
            default: null
        },
        blogId:{
            type: String,
        }

    },
    {
        timestamps: true
    }
);

export default model('replycomment', finalCommentSchema);