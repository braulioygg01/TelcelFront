const Appointment = require('../models/Appointment');

exports.createAppointment = async (req, res) => {
  try {
    const { motivoCita, horaCita} = req.body;
    const newAppointment = new Appointment({
      motivoCita,
      horaCita
      // estatusCita,
      // dispositivos,
      // user: req.user.id
    });
    const appointment = await newAppointment.save();
    res.json(appointment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().populate('user', ['name']);
    res.json(appointments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
