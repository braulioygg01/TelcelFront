const mongoose = require('mongoose');
const AppointmentSchema = new mongoose.Schema({
  motivoCita: String,
  horaCita: String,
//   estatusCita: String,
//   dispositivos: [{ marca: String, modelo: String, problema: String }],
//   fechaRegistro: { type: Date, default: Date.now },
//   fechaEntrega: Date,
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});
module.exports = mongoose.model('Appointment', AppointmentSchema);