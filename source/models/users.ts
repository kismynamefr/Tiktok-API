import mongoose, { Schema } from "mongoose";
import collection from "../interfaces/users";

const collectionSchema: Schema = new Schema(
  {
    serial: {
      type: String,
    },
    username: {
      type: String,
    },
    avatar: {
      type: String,
    },
    fullname: {
      type: String,
    },
    tick: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
    collection: "users",
  }
);

export default mongoose.model<collection>("users", collectionSchema);
