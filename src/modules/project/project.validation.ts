import { z } from "zod";


export const createProjectZodSchema = z.object({
  title: z
    .string({ required_error: "Title is required" })
    .min(3, "Title must be at least 3 characters")
    .max(200, "Title must be less than 200 characters")
    .trim(),
  
  description: z
    .string({ required_error: "Description is required" })
    .min(10, "Description must be at least 10 characters")
    .trim(),
  
  image: z
    .string({ required_error: "Image is required" })
    .url("Image must be a valid URL")
    .trim(),
  
  technologies: z
    .array(z.string().min(1, "Technology cannot be empty"))
    .nonempty("At least one technology is required"),
  
  liveUrl: z
    .string()
    .url("Live URL must be a valid URL")
    .trim()
    .optional(), 
  
  githubUrl: z
    .string()
    .url("GitHub URL must be a valid URL")
    .trim()
    .optional(), 
});


export const updateProjectZodSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(200, "Title must be less than 200 characters")
    .trim()
    .optional(), 
  
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .trim()
    .optional(),
  
  image: z
    .string()
    .url("Image must be a valid URL")
    .trim()
    .optional(),
  
  technologies: z
    .array(z.string().min(1, "Technology cannot be empty"))
    .optional(),
  
  liveUrl: z
    .string()
    .url("Live URL must be a valid URL")
    .trim()
    .optional(),
  
  githubUrl: z
    .string()
    .url("GitHub URL must be a valid URL")
    .trim()
    .optional(),
});
