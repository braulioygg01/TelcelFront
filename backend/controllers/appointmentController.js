const Appointment = require('../models/Appointment');

// Agendar una cita nueva
const createAppointment = async (req, res) => {
  try {
    if(!req.user){
      return res.status(401).json({message: 'No autenticado'})
    }
    const { motivoCita, horaCita, estatusCita} = req.body;
    const newAppointment = new Appointment({
      motivoCita,
      horaCita,
      estatusCita,
      // dispositivos,
      user: req.user.id
    });
    newAppointment = await newAppointment.save();
    res.json(newAppointment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Ver citas agendadas
exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().populate('user', ['name']);
    res.json(appointments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = {createAppointment};