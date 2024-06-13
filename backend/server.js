const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config'); // Asegúrate de que el path es correcto

const app = express();

// Conectar a MongoDB
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB conectado'))
.catch(err => console.log('Error al conectar a MongoDB:', err));

// Middlewares
app.use(express.json());

// Rutas
const authRoutes = require('./routes/auth');
const appointmentRoutes = require('./routes/appointments');
const sparePartRoutes = require('./routes/spareparts');
const repairRoutes = require('./routes/repairs');

app.use('/api/auth', authRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/spareparts', sparePartRoutes);
app.use('/api/repairs', repairRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor iniciado en el puerto ${PORT}`));

