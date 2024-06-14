const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const dbConnection = require('./db/db');

// Crear instancia de la aplicación Express
const app = express();

// Conectar a la base de datos
dotenv.config();
dbConnection();

// Middleware para permitir CORS
app.use(cors());

// Middleware para parsear JSON
app.use(express.json({ extended: false }));

// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/appointments', require('./routes/appointments'));
app.use('/api/spareparts', require('./routes/spareparts'));
app.use('/api/repairs', require('./routes/repairs'));

module.exports = app;
