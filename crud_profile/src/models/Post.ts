import mongoose, { Schema } from 'mongoose';

interface Post {
  title: string;
  desc: string;
  content: string;
  img: string;
  username: string;
}

const postSchema = new Schema<Post>(
  {
    title: {
      type: String,

      required: true,
    },
    desc: {
      type: String,

      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.models.Post || mongoose.model('Post', postSchema);
