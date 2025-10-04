import mongoose, { Schema } from "mongoose";
import { IProject } from "./project.interface";

const projectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    technologies: { type: [String], required: true, default: [] },
    liveUrl: { type: String, trim: true, default: "" },
    githubUrl: { type: String, trim: true, default: "" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Project = mongoose.model<IProject>("Project", projectSchema);
