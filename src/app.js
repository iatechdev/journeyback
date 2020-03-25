//app nodejs Repuestos --
import express, { json } from 'express';
import morgan from 'morgan';//middleware de registrador de solicitudes HTTP
import cors from 'cors';//cabeceras

//cargamos las rutas creadas en la carpeta routes
import userRoutes from './routes/user.routes';
import depRoutes from './routes/dep.routes';
import levelRoutes from './routes/level.routes';



//Server express
const app = express();

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
export default app;
