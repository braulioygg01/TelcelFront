const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { hashPassword, comparePassword } = require('../secure/hashPassword');

// Registro de usuario
const userRegister = async (req, res) => {
  try {
    const { firstName, lastName, phoneNumber, email, password, role } = req.body;

    if(!firstName, !lastName, !phoneNumber, !email, !password, !role){
      return res.status(400).send({message:"Por favor llene todos los campos obligatorios"})
    }

    const existingUser = await User.findOne({email});

    if(existingUser){
      return res.status(400).send({message:"Usuario existente. Inice sesión"})
    }

    const hashedPassword = await hashPassword(password);

    const newUser = new User({ firstName, lastName, phoneNumber, email, password: hashedPassword, role });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Login de usuario
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);  

    if (!email || !password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isUser = await User.findOne({email});

    if(!isUser){
      return res.status(401).send({ message: 'Usuario no encontrado' });
    }

    const isMatchPassword = await comparePassword(password, isUser.password);
    console.log(comparePassword);

    if(!isMatchPassword){
      return res.status(400),send({message:"Contraseña inválida"});
    }
    return res.status(201).json({ message: 'User login successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


module.exports = {userRegister, userLogin};
