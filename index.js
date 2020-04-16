//app nodejs Repuestos --
import express, {
  json
} from 'express';
import morgan from 'morgan'; //middleware de registrador de solicitudes HTTP
import cors from 'cors'; //cabeceras

import userRoutes from './src/routes/user.routes';
import depRoutes from './src/routes/dep.routes';
import levelRoutes from './src/routes/level.routes';
import statusRoutes from './src/routes/status.routes';
import aircraftRoutes from './src/routes/aircraft.routes';
import msgRoutes from './src/routes/msg.routes';

const app = require('express')();

var server = require('http').createServer(app);;
var io = require('socket.io')(server);


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
      io.emit('chat message', msg);
    });
});
app.use(morgan('dev'));
app.use(json());
app.use(cors());
app.use(express.static('public'));
app.use('/api/users', userRoutes);
app.use('/api/deps', depRoutes);
app.use('/api/levels', levelRoutes);
app.use('/api/status', statusRoutes);
app.use('/api/aircrafts', aircraftRoutes);
app.use('/api/msgs', msgRoutes);
server.listen(3001, function () {
  console.log('listening on *:3001');
});