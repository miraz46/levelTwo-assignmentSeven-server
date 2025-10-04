import { Types } from "mongoose";

export interface IProject {
    _id: Types.ObjectId;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
}