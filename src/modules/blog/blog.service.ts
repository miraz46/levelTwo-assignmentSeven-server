import AppError from "../../errorHelpers/AppError";
import { IBlog } from "./blog.interface";
import { Blog } from "./blog.model";
import httpStatus from "http-status-codes"


const createBlog = async (payload: Partial<IBlog>) => {
    const user = await Blog.create(payload);
    return user;
}

const updateBlog = async (blogId: string, payload: Partial<IBlog>) => {

    const ifBlogExist = await Blog.findById(blogId);
    if (!ifBlogExist) {
        throw new AppError(httpStatus.NOT_FOUND, "Blog Not Found")
    }

    const newUpdatedUser = await Blog.findByIdAndUpdate(blogId, payload, { new: true, runValidators: true });

    return newUpdatedUser

}

const getAllBlog = async () => {
    const users = await Blog.find({});

    const totalUsers = await Blog.countDocuments()
    return {
        data: users,
        meta: {
            total: totalUsers
        }
    }
}

const getSingleBlog = async (userId: string) => {
    const users = await Blog.findById(userId);

    return {
        data: users
    }
}

export const BlogService = {
    createBlog,
    updateBlog,
    getAllBlog,
    getSingleBlog
}