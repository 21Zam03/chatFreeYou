import http from 'http';// Para crear el servidor HTTP
import express from 'express'; // Para configurar y administrar rutas
import { Server } from 'socket.io'; // Para habilitar la comunicación en tiempo real con Socket.io

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {origin: '*'}
});

io.on('connection', (socket) => {
  console.log("Se ha conectado un cliente");
  socket.on('envio_mensaje', (data) => {
    console.log(data);
    io.emit('envio_mensaje', data);
  })
});

server.listen(3001, () => {
  console.log("Servidor socket.io en ejecucion en el puerto 3001");
});

