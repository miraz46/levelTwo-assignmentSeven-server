import { Types } from "mongoose";

export interface IBlog {
    _id?: Types.ObjectId;
    title: string
    content: string
    excerpt: string
    slug?: string
    coverImage?: string
    tags: string[]
}