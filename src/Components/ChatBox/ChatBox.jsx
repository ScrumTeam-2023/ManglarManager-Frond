import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const ChatBox = ({ selectedUser }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    if (selectedUser) {
      fetchMessages();
    }
  }, [selectedUser]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/chat/messages/${selectedUser._id}`);
      setMessages(response.data);
    } catch (error) {
      console.error('Error al obtener los mensajes:', error);
    }
  };

  const sendMessage = async () => {
    try {
      if (newMessage.trim() === '') {
        return;
      }

      const data = {
        receiverId: selectedUser._id,
        content: newMessage,
      };

      await axios.post('http://localhost:3000/chat/sendmessage', data);
      fetchMessages();
      setNewMessage('');
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
    }
  };

  return (
    <div className="chat-box">
      <div className="user-info">
        <img src={selectedUser.avatarUrl} alt={`Avatar de ${selectedUser.name}`} />
        <h2>{selectedUser.name}</h2>
      </div>
      <div className="message-list">
        {messages.map((message) => (
          <div key={message._id} className="message">
            <span className="message-sender">{message.senderName}</span>
            <span className="message-content">{message.content}</span>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Enviar</button>
      </div>
    </div>
  );
};
