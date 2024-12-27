import React, { useState } from 'react';
import axios from '../config/axios';

const ProjectModal = ({ onClose, onAddProject }) => {
    const [projectName, setProjectName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/projects/create', { name: projectName }); 
            onAddProject(response.data);
            setProjectName('');
        } catch (error) {
            console.error("Error creating project:", error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-96">
                <h2 className="text-xl font-bold mb-4">Add New Project</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Project Name</label>
                        <input 
                            type="text" 
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                            placeholder="Enter project name"
                            required
                        />
                    </div>
                    <div className="flex justify-between">
                        <button 
                            type="button" 
                            onClick={onClose} 
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit" 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Create Project
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProjectModal;