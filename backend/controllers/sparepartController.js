const SparePart = require('../models/SparePart');

exports.createSparePart = async (req, res) => {
  try {
    const { nombreRefaccion, precio, cantidad, descripcion } = req.body;
    const newSparePart = new SparePart({
      nombreRefaccion,
      precio,
      cantidad,
      descripcion
    });
    const sparePart = await newSparePart.save();
    res.json(sparePart);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getSpareParts = async (req, res) => {
  try {
    const spareParts = await SparePart.find();
    res.json(spareParts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
