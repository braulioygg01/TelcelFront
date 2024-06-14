// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Reemplaza con la URL de tu servidor backend
});

export default api;
