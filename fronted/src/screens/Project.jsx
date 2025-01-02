import React from 'react';
import { useLocation } from 'react-router-dom';
import ChatComponent from './ChatComponet.jsx';
import { useUser } from '../context/user.context.jsx';

const Project =  () => {
    const location = useLocation();
    const { user } = useUser();
    const { project } = location.state;
    console.log(project);
    
    const getUserName = (email) => {
      return email.split("@")[0];
    };
    
    const userName = getUserName(user.email);

    return (
        <div className="h-screen bg-red-50">
          {/* <h1 className="text-3xl font-bold mb-4">{project.name}</h1> */}
          {/* <h2 className="text-xl font-semibold mb-2">Collaborators:</h2>  */}
          <ul>
            {project.users.map((userId) => (
              <li key={userId} className="text-gray-700">
                {/* User ID: {userId} */}
              </li>
            ))}
          </ul><div className='h-screen'>
          <ChatComponent projectName={project.name} userName={userName} projectData = {project} />
          </div>
        </div>
      );
};


export default Project;