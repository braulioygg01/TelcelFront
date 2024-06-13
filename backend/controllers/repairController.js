const Repair = require('../models/Repair');

exports.createRepair = async (req, res) => {
  try {
    const { tipoReparacion, detalles, costoServicio, total, nombreCliente, nombreTecnico } = req.body;
    const newRepair = new Repair({
      tipoReparacion,
      detalles,
      costoServicio,
      total,
      nombreCliente,
      nombreTecnico
    });
    const repair = await newRepair.save();
    res.json(repair);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getRepairs = async (req, res) => {
  try {
    const repairs = await Repair.find().populate('cita', ['motivoCita', 'horaCita', 'estatusCita']);
    res.json(repairs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
