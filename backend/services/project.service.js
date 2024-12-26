import projectModel from "../models/project.model.js";

export const createProject = async ({ name, userId }) => {
  if (!name || !userId) {
    throw new Error("name and userId are required");
  }

  const project = await projectModel.create({
    name,
    users: [userId],
  });

  return project;
};


