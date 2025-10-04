/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes"
import { BlogService } from "./blog.service";

const createBlog = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const blog = await BlogService.createBlog(req.body);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Blog Created Successfully",
        data: blog
    })
})

const updateBlog = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const blogId = req.params.id;
    const payload = req.body;
    const blog = await BlogService.updateBlog(blogId, payload);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Blog Updated Successfully",
        data: blog
    })
})

const getAllBlog = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await BlogService.getAllBlog();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Get all Blog Successfully",
        data: result.data,
        meta: result.meta
    })
})

const getSingleBlog = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const blogId = req.params.id;
    const result = await BlogService.getSingleBlog(blogId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Blog Get Successfully",
        data: result.data,
    })
})

const deleteBlog = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const blogId = req.params.id;
    const result = await BlogService.deleteBlog(blogId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Blog Deleted Successfully",
        data: result.data,
    })
})

export const BlogController = {
    createBlog,
    updateBlog,
    getAllBlog,
    getSingleBlog,
    deleteBlog
}