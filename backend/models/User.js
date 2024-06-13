const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phone: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['Client', 'Admin', 'Cliente', 'Administrador'] }
});
module.exports = mongoose.model('User', UserSchema);
