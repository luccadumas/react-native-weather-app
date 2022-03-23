import axios from 'axios';
import { API_URL } from '../../env.json';

const API_URL_IMG = 'http://openweathermap.org';

export const api = axios.create({
  // baseURL: `${SERVER_URL}/api`,
  baseURL: `${API_URL}/data/2.5/`,
  timeout: 180000,
});

export const apiImage = `${API_URL_IMG}/img`;
