import mongoose, { Schema } from "mongoose";
import { IUser, Role } from "./user.interface";


const userSchema = new Schema<IUser>(
    {
        name: { type: String },
        email: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        role: {
            type: String,
            enum: Object.values(Role),
            default: Role.ADMIN,
        },
        phone: { type: String, trim: true },
        title: { type: String, trim: true },
        bio: { type: String, trim: true },
        github: { type: String, trim: true },
        linkedin: { type: String, trim: true },
        skills: { type: [String], default: [] },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export const User = mongoose.model<IUser>("User", userSchema);
