const express = require('express');
const router = express.Router();
const { createRepair, getRepairs } = require('../controllers/repairController');
const authMiddleware = require('../middlewares/authMiddleware');

// Ruta para crear una nueva reparación
router.post('/spareparts', authMiddleware, createRepair);

// Ruta para obtener todas las reparaciones
router.get('/spareparts', authMiddleware, getRepairs);

module.exports = router;