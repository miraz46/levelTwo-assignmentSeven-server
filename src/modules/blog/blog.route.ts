import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { createBlogZodSchema, updateBlogZodSchema } from "./blog.validation";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";
import { BlogController } from "./blog.controller";

const router = Router();

router.post("/create", validateRequest(createBlogZodSchema), checkAuth(Role.ADMIN),BlogController.createBlog)
router.patch("/:id", validateRequest(updateBlogZodSchema), checkAuth(Role.ADMIN), BlogController.updateBlog);
router.get("/all-blogs", checkAuth(Role.ADMIN), BlogController.getAllBlog);
router.get("/:id", checkAuth(Role.ADMIN), BlogController.getSingleBlog)
router.delete("/:id", checkAuth(Role.ADMIN), BlogController.deleteBlog)

export const BlogRoutes = router;