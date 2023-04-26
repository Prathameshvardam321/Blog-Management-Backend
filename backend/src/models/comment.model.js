import { Schema, model } from 'mongoose';

const commentSchema = new Schema(
  {
    parent: {
      type: String
    },
    comment: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('Comment', commentSchema);