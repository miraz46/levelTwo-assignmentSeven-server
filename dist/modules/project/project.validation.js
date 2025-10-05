"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProjectZodSchema = exports.createProjectZodSchema = void 0;
const zod_1 = require("zod");
exports.createProjectZodSchema = zod_1.z.object({
    title: zod_1.z
        .string({ required_error: "Title is required" })
        .min(3, "Title must be at least 3 characters")
        .max(200, "Title must be less than 200 characters")
        .trim(),
    description: zod_1.z
        .string({ required_error: "Description is required" })
        .min(10, "Description must be at least 10 characters")
        .trim(),
    image: zod_1.z
        .string({ required_error: "Image is required" })
        .url("Image must be a valid URL")
        .trim(),
    technologies: zod_1.z
        .array(zod_1.z.string().min(1, "Technology cannot be empty"))
        .nonempty("At least one technology is required"),
    liveUrl: zod_1.z
        .string()
        .url("Live URL must be a valid URL")
        .trim()
        .optional(),
    githubUrl: zod_1.z
        .string()
        .url("GitHub URL must be a valid URL")
        .trim()
        .optional(),
});
exports.updateProjectZodSchema = zod_1.z.object({
    title: zod_1.z
        .string()
        .min(3, "Title must be at least 3 characters")
        .max(200, "Title must be less than 200 characters")
        .trim()
        .optional(),
    description: zod_1.z
        .string()
        .min(10, "Description must be at least 10 characters")
        .trim()
        .optional(),
    image: zod_1.z
        .string()
        .url("Image must be a valid URL")
        .trim()
        .optional(),
    technologies: zod_1.z
        .array(zod_1.z.string().min(1, "Technology cannot be empty"))
        .optional(),
    liveUrl: zod_1.z
        .string()
        .url("Live URL must be a valid URL")
        .trim()
        .optional(),
    githubUrl: zod_1.z
        .string()
        .url("GitHub URL must be a valid URL")
        .trim()
        .optional(),
});
