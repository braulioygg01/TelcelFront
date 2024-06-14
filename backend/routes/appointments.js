const express = require('express');
const appointmentRouter = express.Router();
const { createAppointment } = require('../controllers/appointmentController');

// Crear nueva cita
appointmentRouter.post("/", createAppointment);

// Ver todas las citas
// router.get('/', async (req, res) => {
//   try {
//     const appointments = await Appointment.find().populate('clientId', 'firstName lastName');
//     res.json(appointments);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

module.exports = appointmentRouter;
