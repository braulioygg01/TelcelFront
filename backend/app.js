const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// Crear instancia de la aplicación Express
const app = express();

// Conectar a la base de datos
connectDB();

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
