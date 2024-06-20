import axios from 'axios';

const instance = axios.create({
  baseURL: 'backend-proyecto-kxviycaj7.vercel.app'
});

export default instance;