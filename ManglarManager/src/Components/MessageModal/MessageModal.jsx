import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MessageModal = ({ isOpen, onClose, selectedUser }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (isOpen && selectedUser) {
      fetchMessages();
    }
  }, [isOpen, selectedUser]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/chat/messages/${selectedUser._id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token'),
        },
      });
      setMessages(response.data);
    } catch (error) {
      console.error('Error al obtener los mensajes:', error);
    }
  };

  return (
    <>
      {isOpen && selectedUser && (
        <div className="modal-overlay">
          <div className="message-modal-content">
            <h2>Chat with {selectedUser.name}</h2>
            {messages.length > 0 ? (
              <ul className="messages-list">
                {messages.map((message) => (
                  <li
                    key={message._id}
                    className={`message-item ${message.sender === selectedUser._id ? 'sent' : 'received'}`}
                  >
                    <span className="sender-name">{message.senderName}:</span> {message.content}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No messages yet.</p>
            )}
            <div className="modal-buttons">
              <button className="btn-modal" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MessageModal;
