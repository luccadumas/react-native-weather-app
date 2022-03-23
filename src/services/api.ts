import axios from 'axios';
import { API_URL } from '@env';

export const api = axios.create({
  // baseURL: `${SERVER_URL}/api`,
  baseURL: `${API_URL}/data/2.5/`,
  timeout: 180000,
});
