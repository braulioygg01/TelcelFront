// models/Appointment.js
const mongoose = require('mongoose');

// const deviceSchema = new mongoose.Schema({
//   deviceName: { type: String, required: true },
//   issueDescription: { type: String, required: true },
// });

const appointmentSchema = new mongoose.Schema({
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  reason: { type: String, required: true },
  appointmentTime: { type: String, required: true },
  status: { type: String, required: true, enum: ['Pending', 'Confirmed', 'Completed', 'Cancelled'] },
  //devices: [deviceSchema],
  registrationDate: { type: Date, default: Date.now },
  deliveryDate: { type: Date },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;
