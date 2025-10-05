import { Types } from "mongoose";

export enum Role {
    ADMIN = "ADMIN"
}

export interface IUser {
    _id?: Types.ObjectId;
    name: string;
    email: string;
    password: string;
    role: Role;
    phone?: string;
    title: string;   
    bio: string;    
    github: string;
    linkedin: string;
    skills: string[];
}

