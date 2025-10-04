/* eslint-disable @typescript-eslint/no-unused-vars */
import AppError from "../../errorHelpers/AppError";
import { IBlog } from "./blog.interface";
import { Blog } from "./blog.model";
import httpStatus from "http-status-codes"


const createBlog = async (payload: Partial<IBlog>) => {
    const blog = await Blog.create(payload);
    return blog;
}

const updateBlog = async (blogId: string, payload: Partial<IBlog>) => {

    const ifBlogExist = await Blog.findById(blogId);
    if (!ifBlogExist) {
        throw new AppError(httpStatus.NOT_FOUND, "Blog Not Found")
    }

    const newUpdatedBlog = await Blog.findByIdAndUpdate(blogId, payload, { new: true, runValidators: true });

    return newUpdatedBlog

}

const getAllBlog = async () => {
    const blogs = await Blog.find({});

    const totalBlogs = await Blog.countDocuments()
    return {
        data: blogs,
        meta: {
            total: totalBlogs
        }
    }
}

const getSingleBlog = async (blogId: string) => {
    const blogs = await Blog.findById(blogId);

    return {
        data: blogs
    }
}
const deleteBlog = async (blogId: string) => {
    const blogs = await Blog.findByIdAndDelete(blogId);

    return {
        data: null
    }
}

export const BlogService = {
    createBlog,
    updateBlog,
    getAllBlog,
    getSingleBlog,
    deleteBlog
}