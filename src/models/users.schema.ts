import { Schema } from 'mongoose';
const users = new Schema(
  {
    user_name: {
      type: String,
      required: true,
    },
    user_username: {
      type: String,
      required: true,
    },
    user_password: {
      type: String,
      required: true,
    },
    user_photo: {
      type: String,
      required: true,
    },
    user_role: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default users;
