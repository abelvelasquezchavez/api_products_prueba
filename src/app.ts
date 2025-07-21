import express from 'express';
import routes from './routes';

const app = express(); // Permite el uso de metodos http en express como get, post, put, delete, use, listen, etc.
app.use(express.json()); // Permite el uso de json en las peticiones
app.use('/api', routes); // Ruta para las peticiones a la api

export default app;
