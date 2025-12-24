import mongoose, {Schema} from "mongoose";
import type { UserType } from "./user.types";

const userSchema = new Schema<UserType>({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        unique: true,
        type: String
    },
    password: {
        required: true,
        type: String
    }
}, {
    timestamps: true

})


export const User = mongoose.model("user", userSchema)