import { Document } from "mongoose";

export default interface collection extends Document {
  serial: String;
  username: String;
  avatar: String;
  fullname: String;
  tick: Boolean;
}
