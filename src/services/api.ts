import axios from 'axios';

// import { SERVER_URL } from '../config/env.json';

export const api = axios.create({
  // baseURL: `${SERVER_URL}/api`,
  baseURL: 'https://api.openweathermap.org/data/2.5/',
  timeout: 180000,
});