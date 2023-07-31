import React, { useEffect, useState } from 'react';
import {Outlet, Route} from 'react-router-dom'
import socketIOClient from 'socket.io-client';
  // Importa los demás componentes y rutas de tu aplicación
// ...

function App() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Conectar al socket del servidor
    const socket = socketIOClient('/'); 
    setSocket(socket);

    // Importante: Cuando el componente se desmonte, asegúrate de cerrar la conexión del socket.
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Outlet>
    </Outlet>
  );
}

export default App;
