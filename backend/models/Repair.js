const mongoose = require('mongoose');
const RepairSchema = new mongoose.Schema({
  tipoReparacion: String,
  detalles: String,
  costoServicio: Number,
  total: Number,
  nombreCliente: String,
  nombreTecnico: String,
  idCita: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' },
  refaccionesUsadas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SparePart' }]
});
module.exports = mongoose.model('Repair', RepairSchema);
