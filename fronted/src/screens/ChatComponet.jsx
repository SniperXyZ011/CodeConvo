import React, { useState } from 'react';

const ChatComponent = ({ projectName, userName }) => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            // Create a message object with user information
            const newMessage = {
                user: userName, // Use the userName prop
                text: inputValue,
            };
            setMessages([...messages, newMessage]);
            setInputValue(''); // Clear input field after sending
        }
    };

    return (
        <div className="flex flex-col w-1/4 h-full border border-gray-300 rounded-lg shadow-lg bg-slate-200">
            {/* Header with Project Name */}
            <div className="bg-slate-800 text-white p-4 rounded-t-lg">
                <h2 className="text-xl font-bold">{projectName}</h2>
            </div>

            {/* Messages Display Area */}
            <div className="flex-grow overflow-y-auto border border-gray-200 rounded-b-lg p-2">
                {messages.length === 0 ? (
                    <p className="text-gray-500 text-center">No messages yet.</p>
                ) : (
                    messages.map((message, index) => (
                        <div key={index} className="max-w-xs bg-white text-gray-800 p-2 rounded-lg mb-2 break-words">
                            <div className="flex justify-between">
                                <span className="text-sm text-gray-600 opacity-75">{message.user}</span> {/* Smaller, less opaque username */}
                                <span className="text-xs text-gray-500">{new Date().toLocaleTimeString()}</span> {/* Optional timestamp */}
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
                   <i class="ri-arrow-up-line"></i>
                </button>
            </div>
        </div>
    );
};

export default ChatComponent;