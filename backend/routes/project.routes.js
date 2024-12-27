import { Router } from "express";
import { body } from "express-validator";
import * as projectController from "../controllers/project.controller.js";
import * as authMiddleWare from "../middleware/auth.middleware.js";

const router = Router();

router.post(
  "/create",
  authMiddleWare.authUser,
  body("name").isString().withMessage("name is required"),
  projectController.createProject
);

router.get("/all", authMiddleWare.authUser, projectController.getAllProjects);

router.put(
  "/add-user",
  authMiddleWare.authUser,
  body("projectId").isString().withMessage("projectId is required"),
  body("users")
    .isArray({ min: 1 })
    .withMessage("User must be an arrya of strings")
    .bail()
    .custom((users) => users.every((user) => typeof user === "string"))
    .withMessage("User must be an arrya of strings"),
  projectController.addUserToProject
);

router.get('/get-project/:projectId', authMiddleWare.authUser, projectController.getProjectById)
export default router;
