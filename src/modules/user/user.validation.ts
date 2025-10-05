import z from "zod";

export const updateUserZodSchema = z.object({
    title: z.string().max(100).optional(),
    bio: z.string().max(500).optional(),
    github: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    skills: z.array(z.string()).optional(),
});

