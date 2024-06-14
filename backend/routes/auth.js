const express = require('express');
const {userRegister, userLogin} = require("../controllers/authController");
const authRouter = express.Router();

// Registro de usuario
authRouter.post("/register", userRegister);

// Login de usuario
authRouter.post("/login", userLogin);

module.exports = authRouter;
