import z from "zod";

export const updateUserZodSchema = z.object({
    title: z.string().max(100).optional(),
    bio: z.string().max(500).optional(),
    github: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    skills: z.array(z.string()).optional(),
});


export const loginZodSchema = z.object({
    email: z
        .string({ invalid_type_error: "Email must be a string." })
        .email({ message: "Invalid email format." }),

    password: z
        .string({ invalid_type_error: "Password must be a string." })
        .min(8, { message: "Password must be at least 8 characters." })
        .regex(/[A-Z]/, {
            message: "Password must contain at least one uppercase letter.",
        })
        .regex(/[!@#$%^&*]/, {
            message: "Password must contain at least one special character (!@#$%^&*).",
        })
        .regex(/\d/, {
            message: "Password must contain at least one number.",
        }),
});