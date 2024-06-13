const express = require('express');
const router = express.Router();
const { createAppointment, getAppointments } = require('../controllers/appointmentController');
const authMiddleware = require('../middlewares/authMiddleware');

// Ruta para crear una nueva cita
router.post('/', authMiddleware, createAppointment);

// Ruta para obtener todas las citas
router.get('/appointments', authMiddleware, getAppointments);

module.exports = router;