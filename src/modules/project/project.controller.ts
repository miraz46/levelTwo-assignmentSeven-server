/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes"
import { ProjectService } from "./project.service";

const createProject = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const project = await ProjectService.createProject(req.body);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Project Created Successfully",
        data: project
    })
})

const updateProject = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const projectId = req.params.id;
    const payload = req.body;
    const project = await ProjectService.updateProject(projectId, payload);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Project Updated Successfully",
        data: project
    })
})

const getAllProject = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await ProjectService.getAllProject();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Get all Project Successfully",
        data: result.data,
        meta: result.meta
    })
})

const getSingleProject = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const projectId = req.params.id;
    const result = await ProjectService.getSingleProject(projectId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Project Get Successfully",
        data: result.data,
    })
})

const deleteProject = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const projectId = req.params.id;
    const result = await ProjectService.deleteProject(projectId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Project Deleted Successfully",
        data: result.data,
    })
})

export const ProjectController = {
    createProject,
    updateProject,
    getAllProject,
    getSingleProject,
    deleteProject
}