import mongoose from "mongoose";
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

export const getAllProjectByUserId = async ({ userId }) => {
  if (!userId) {
    throw new Error("userId is required");
  }

  const allUserProjects = await projectModel.find({
    users: userId,
  });

  return allUserProjects;
};

export const addUsersToProject = async ({ projectId, users, userId }) => {
  if (!projectId) {
    throw new Error("projectId is required");
  }

  if (!mongoose.Types.ObjectId.isValid(projectId)) {
    throw new Error("Invalid projectId");
  }

  if (!users) {
    throw new Error("users is required");
  }

  if (
    !Array.isArray(users) ||
    users.some((userId) => !mongoose.Types.ObjectId.isValid(userId))
  ) {
    throw new Error("users must be an array");
  }

  if (!userId) {
    throw new Error("userId is required");
  }

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    throw new Error("Valid userId is required");
  }

  const project = await projectModel.findOne({
    _id: projectId,
    users: userId,
  });

  if (!project) {
    throw new Error("user dosen't belong to this project");
  }

  const updatedProject = await projectModel.findOneAndUpdate(
    {
      _id: projectId,
    },
    {
      $addToSet: {
        users: {
          $each: users,
        }
      }
    },
    {
      new: true,
    }
  );
  return updatedProject;
};

export const getProjectById = async ({ projectId }) => {
  if(!projectId){
    throw new Error('projectId is required')
  }

  if(!mongoose.Types.ObjectId.isValid(projectId)){
    throw new Error('Valid projectId is required')
  }
  const project = await projectModel.findOne({ _id: projectId}).populate('users');
  return project
}