import mongoose, { models } from "mongoose";
import { Schema } from "mongoose";


const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userEmail: { type: String, trim: true, required: true, unique: true },
    userPassword: { type: String, required: true },
},{ timestamps: true });

const user = models.user || mongoose.model("user", userSchema);

export default user;

