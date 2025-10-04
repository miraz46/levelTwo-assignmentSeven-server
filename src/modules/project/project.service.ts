/* eslint-disable @typescript-eslint/no-unused-vars */
import AppError from "../../errorHelpers/AppError";

import httpStatus from "http-status-codes"
import { IProject } from "./project.interface";
import { Project } from "./project.model";


const createProject = async (payload: Partial<IProject>) => {
    const project = await Project.create(payload);
    return project;
}

const updateProject = async (projectId: string, payload: Partial<IProject>) => {

    const ifProjectExist = await Project.findById(projectId);
    if (!ifProjectExist) {
        throw new AppError(httpStatus.NOT_FOUND, "Projects Not Found")
    }

    const newUpdatedProject = await Project.findByIdAndUpdate(projectId, payload, { new: true, runValidators: true });

    return newUpdatedProject

}

const getAllProject = async () => {
    const project = await Project.find({});

    const totalProjects = await Project.countDocuments()
    return {
        data: project,
        meta: {
            total: totalProjects
        }
    }
}

const getSingleProject = async (projectId: string) => {
    const project = await Project.findById(projectId);

    return {
        data: project
    }
}

const deleteProject = async (projectId: string) => {
    const blogs = await Project.findByIdAndDelete(projectId);

    return {
        data: null
    }
}


export const ProjectService = {
    createProject,
    updateProject,
    getAllProject,
    getSingleProject,
    deleteProject
}