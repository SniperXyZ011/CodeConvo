import React, { useEffect, useState } from "react";
import { useUser } from "../context/user.context.jsx";
import axios from "../config/axios"; // Ensure you have axios configured
import ProjectModal from "./ProjectModal"; // Import the modal component
import { useNavigate } from "react-router-dom";

const Content = () => {
  const { user } = useUser();
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // Fetch projects when the component mounts
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/projects/all"); // Await the response directly
        console.log("here is the response data", response.data.projects); // Log the projects
        setProjects(response.data.projects); // Set the projects state
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
    setIsModalOpen(false);
  };


  const handleProjectClick = (project) => {
    navigate(`/project/${project._id}`, {state: {project}});
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4">Your Projects</h1>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Add Project
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div className="flex min-w-44 w-3/4 cursor-pointer ">
            <div
              key={project._id} onClick={() => handleProjectClick(project)}
              className="bg-white shadow-md rounded-lg p-4 w-full hover:bg-rose-50"
            >
              <h2 className="text-xl font-semibold">{project.name}</h2>
              <div className="flex gap-1">
                {" "}
                <p> <small>
                  <i className="ri-user-3-line"></i> Collabrators :
                  </small>
                </p>{" "}
                {project.users.length}{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <ProjectModal
          onClose={() => setIsModalOpen(false)}
          onAddProject={handleAddProject}
        />
      )}
    </div>
  );
};

export default Content;
