  import React, { useEffect, useState } from 'react';
  import axios from 'axios';
  import './contac.css';
  import { MDBBtn, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter } from 'mdb-react-ui-kit';
  import MessageModal from '../MessageModal/MessageModal';

  export const ContactListTable = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageContent, setMessageContent] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);
    const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    };

    useEffect(() => {
      fetchUsers();
    }, []);

    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/user/get', { headers: headers });
        setUsers(response.data.getUsers);
      } catch (error) {
        console.error('Error al obtener la lista de usuarios:', error);
      }
    };

    const generateAvatarUrl = (userName) => {
      return `https://robohash.org/${userName}.png`;
    };

    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
    };

    const handleSelectUser = (user) => {
      setSelectedUser(user);
    };

    const filteredUsers = users.filter((user) => {
      return user.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const handleOpenMessageModal = () => {
      setIsMessageModalOpen(true);
    };
  
    const handleCloseMessageModal = () => {
      setIsMessageModalOpen(false);
    };

    const handleSendMessage = async () => {
      try {
        // Realizar la solicitud para enviar el mensaje usando la función sendMessage
        const response = await axios.post(`http://localhost:3000/chat/sendmessage `,  {
          contenido: messageContent,
          idDestinatario: selectedUser._id,
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token'),
          },
        });

        console.log('Mensaje enviado:', response.data);

        // Cerrar el modal
        // Limpiar el contenido del mensaje después de enviarlo
        setMessageContent('');
      } catch (error) {
        console.error('Error al enviar el mensaje:', error);
      }
    };

    return (
      <div className="container mt-4">
        <h1>Contact List</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar por nombre..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Chat</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user._id}>
                <td>
                  <div className="avatar-container">
                    <img
                      src={generateAvatarUrl(user.name)}
                      alt={`Avatar de ${user.name}`}
                      className="avatar"
                    />
                  </div>
                </td>
                <td>
                  <span className="contact-name">{user.name}</span>
                </td>
                <td>
                  <MDBBtn
                    className="btn"
                    color="primary"
                    size="sm"
                    onClick={() => {
                      handleSelectUser(user);
                      setIsModalOpen(true);
                    }}
                  >
                    Chat
                  </MDBBtn>
                  <MDBBtn
                  className="btn"
                  color="secondary" 
                  size="sm"
                  onClick={() => {
                    handleSelectUser(user);
                    handleOpenMessageModal();
                  }}
                >
                  Show Messages
                </MDBBtn>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <MessageModal isOpen={isMessageModalOpen} onClose={handleCloseMessageModal} selectedUser={selectedUser} />


        {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Chat with {selectedUser && selectedUser.name}</h2>
            <textarea
              value={messageContent}
              onChange={(e) => setMessageContent(e.target.value)}
              rows="4"
              placeholder="Write your message here..."
            />
            <div className="modal-buttons">
              <button className="btn-modal" onClick={() => setIsModalOpen(false)}>
                Close
              </button>
              <button className="btn-modal" onClick={handleSendMessage}>
                Send
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    );
  };

  export default ContactListTable;
