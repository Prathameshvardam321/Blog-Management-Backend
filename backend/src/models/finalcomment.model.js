
import { number, string } from '@hapi/joi';
import { Mongoose, Schema, model } from 'mongoose';

const finalCommentSchema = new Schema(
  {

    parent: {
      type: String
    },
    blogId: {
      type: String
    },

    Comment: {
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
    }

  },
  {
    timestamps: true
  }
);

export default model('finalComment', finalCommentSchema);