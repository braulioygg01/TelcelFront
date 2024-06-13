const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  // Leer el token del header
  const token = req.header('Authorization').replace('Bearer ', '');

  // Revisar si no hay token
  if (!token) {
    return res.status(401).json({ msg: 'No hay token, permiso no válido' });
  }

  // Validar el token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token no válido' });
  }
};
