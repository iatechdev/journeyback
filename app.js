//app nodejs Repuestos --
import express, { json } from 'express';
import morgan from 'morgan';//middleware de registrador de solicitudes HTTP
import cors from 'cors';//cabeceras

//cargamos las rutas creadas en la carpeta routes
import userRoutes from './src/routes/user.routes';
import depRoutes from './src/routes/dep.routes';
import levelRoutes from './src/routes/level.routes';
import statusRoutes from './src/routes/status.routes';
import aircraftRoutes from './src/routes/aircraft.routes';
import msgRoutes from './src/routes/msg.routes';



//Server express

const app = require('express')();

var server = require('http').createServer(app);;
var io = require('socket.io')(server);


app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
});
io.on('connection', function (socket) {
    console.log('a user connected');
});

// middlewares
app.use(morgan('dev'));
app.use(json());
app.use(cors());
app.use(express.static('public'));

//routes
// app.use definimos la url del modulo y le enviamos el metodo que necesitamos
// al cargar el router al inicio de este archivo lo asiganamos a una variable que 
// utilizamos el app.use
// el paso siguiente es ir a routes del modulo indicado ejemplo routes/user.routes.js



app.use('/api/users', userRoutes);
app.use('/api/deps', depRoutes);
app.use('/api/levels',levelRoutes);
app.use('/api/status', statusRoutes);

app.use('/api/aircrafts', aircraftRoutes);
app.use('/api/msgs', msgRoutes);




export default app;
