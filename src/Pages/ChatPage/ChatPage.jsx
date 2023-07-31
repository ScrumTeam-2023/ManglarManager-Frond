import React, { useState } from 'react';
import { ContactListTable } from '../../Components/ContacList/ContacList';
import { ChatBox } from '../../Components/ChatBox/ChatBox';


export const ChatPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="chat-page">
      <div className="chat-container">
        <ContactListTable handleSelectUser={handleSelectUser} />
        {selectedUser && <ChatBox selectedUser={selectedUser} />}
      </div>
    </div>
  );
};
