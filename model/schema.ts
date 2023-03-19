import { model, models, Schema } from "mongoose";

export type UserType = {
  id: string;
  email: string;
  username: string;
  password: string;
};

const userSchema = new Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const Users = models.user || model<UserType>("user", userSchema);

export default Users;
