const express = require('express');
const router = express.Router();
const { createRepair, getRepairs } = require('../controllers/repairController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/repairs', authMiddleware, createRepair);
router.get('/repairs', authMiddleware, getRepairs);

module.exports = router;
