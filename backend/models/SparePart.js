const mongoose = require('mongoose');
const SparePartSchema = new mongoose.Schema({
  nombreRefaccion: String,
  precio: Number,
  cantidad: Number,
  descripcion: String,
  estatus: String
});
module.exports = mongoose.model('SparePart', SparePartSchema);
