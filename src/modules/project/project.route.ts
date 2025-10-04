import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { createProjectZodSchema, updateProjectZodSchema } from "./project.validation";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";
import { ProjectController } from "./project.controller";

const router = Router();


router.post("/create", validateRequest(createProjectZodSchema), checkAuth(Role.ADMIN), ProjectController.createProject)
router.patch("/:id", validateRequest(updateProjectZodSchema), checkAuth(Role.ADMIN), ProjectController.updateProject);
router.get("/all-projects", checkAuth(Role.ADMIN), ProjectController.getAllProject);
router.get("/:id", checkAuth(Role.ADMIN), ProjectController.getSingleProject)
router.delete("/:id", checkAuth(Role.ADMIN), ProjectController.deleteProject)





export const ProjectRoutes = router;