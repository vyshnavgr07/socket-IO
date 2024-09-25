import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: 'Me', text: 'Hello, how are you?' },
    { sender: 'Friend', text: 'I\'m good! How about you?' },
    { sender: 'Me', text: 'I\'m doing well, thanks!' },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { sender: 'Me', text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-container  h-screen flex flex-col">
      {/* Chat header */}
      <div className="chat-header bg-green-500 p-4 text-white text-center font-bold">
        Chat
      </div>

      {/* Chat messages area */}
      <div className="chat-messages flex-1 overflow-y-auto bg-gray-100">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message-container ${message.sender === 'Me' ? 'message-right' : 'message-left'}`}
          >
            <div className={`message-bubble mt-5  ${message.sender === 'Me' ? 'bg-green-200 text-white' : 'bg-white text-gray-800'}`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* Chat input area */}
      <div className="chat-input flex items-center bg-white p-4 border-t border-gray-300">
        <input
          type="text"
          placeholder="Type a message"
          className="flex-1 bg-gray-100 p-2 rounded-lg outline-none"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          className="ml-2 bg-green-500 text-white p-2 rounded-lg"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;