"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogService = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
const AppError_1 = __importDefault(require("../../errorHelpers/AppError"));
const blog_model_1 = require("./blog.model");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const createBlog = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield blog_model_1.Blog.create(payload);
    return blog;
});
const updateBlog = (blogId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const ifBlogExist = yield blog_model_1.Blog.findById(blogId);
    if (!ifBlogExist) {
        throw new AppError_1.default(http_status_codes_1.default.NOT_FOUND, "Blog Not Found");
    }
    const newUpdatedBlog = yield blog_model_1.Blog.findByIdAndUpdate(blogId, payload, { new: true, runValidators: true });
    return newUpdatedBlog;
});
const getAllBlog = () => __awaiter(void 0, void 0, void 0, function* () {
    const blogs = yield blog_model_1.Blog.find({});
    const totalBlogs = yield blog_model_1.Blog.countDocuments();
    return {
        data: blogs,
        meta: {
            total: totalBlogs
        }
    };
});
const getSingleBlog = (blogId) => __awaiter(void 0, void 0, void 0, function* () {
    const blogs = yield blog_model_1.Blog.findById(blogId);
    return {
        data: blogs
    };
});
const deleteBlog = (blogId) => __awaiter(void 0, void 0, void 0, function* () {
    const blogs = yield blog_model_1.Blog.findByIdAndDelete(blogId);
    return {
        data: null
    };
});
exports.BlogService = {
    createBlog,
    updateBlog,
    getAllBlog,
    getSingleBlog,
    deleteBlog
};
