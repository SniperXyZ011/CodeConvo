import React, { useState } from "react";

const ChatComponent = ({ projectName, userName, projectData }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage = {
        user: userName,
        text: inputValue,
      };
      setMessages([...messages, newMessage]);
      setInputValue("");
    }
  };

  const handleGroupClick = () => {
    setIsSidePanelOpen(!isSidePanelOpen);
  };

  return (
    <div className="flex flex-col w-1/4 h-full border border-gray-300 rounded-lg shadow-lg bg-slate-200">
      {/* Header with Project Name */}
      <div className="bg-slate-800 text-white p-4 rounded-t-lg flex justify-between">
        <h2 className="text-xl font-bold">{projectName}</h2>
        <button onClick={handleGroupClick}>
          <i class="ri-group-line"></i>
        </button>
      </div>

      {/* Messages Display Area */}
      <div className="flex-grow overflow-y-auto border border-gray-200 rounded-b-lg p-2">
        {messages.length === 0 ? (
          <p className="text-gray-500 text-center">No messages yet.</p>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className="max-w-xs bg-white text-gray-800 p-2 rounded-lg mb-2 break-words"
            >
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 opacity-75">
                  {message.user}
                </span>{" "}
                {/* Smaller, less opaque username */}
                <span className="text-xs text-gray-500">
                  {new Date().toLocaleTimeString()}
                </span>{" "}
                {/* Optional timestamp */}
              </div>
              <p>{message.text}</p>
            </div>
          ))
        )}
      </div>

      {/* Input Field and Send Button */}
      <div className="flex p-2 bg-gray-100 rounded-b-lg">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-grow border border-gray-300 rounded-lg p-2 mr-2 focus:outline-none"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSendMessage}
          className="bg-slate-800 text-white rounded-lg px-4 py-2 hover:bg-slate-950 transition duration-200"
        >
          <i className="ri-arrow-up-line"></i>
        </button>
      </div>
      {/* Side Panel */}
      {isSidePanelOpen && (
        <SidePanel
          project={projectData}
          onClose={() => setIsSidePanelOpen(false)}
        />
      )}
    </div>
  );
};

const SidePanel = ({ project, onClose }) => {
  return (
    <div className="fixed inset-y-0 left-0 w-1/4 bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
      <div className="p-4">
        <div className="flex justify-between ">
          <h2 className="text-xl font-bold mb-4">Project Info</h2>
          <div>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-900"
            >
              <i class="ri-close-line"></i>
            </button>
          </div>
        </div>
        <div>
          <p>
            <strong>Name:</strong> {project.name}
          </p>
          <p>
            <strong>Collaborators:</strong>
          </p>
          <ul>
            {project.users.map((user, index) => (
              <li key={index}>{user}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
