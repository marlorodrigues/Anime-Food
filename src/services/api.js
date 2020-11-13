//Pasta para add qq arquivo para se conectar a servicos externos

import axios from 'axios';

// const api = axios.create({ baseURL: 'localhost:8080/api' });
const api = axios.create({ baseURL: 'http://localhost:3000/' });

export default api;



