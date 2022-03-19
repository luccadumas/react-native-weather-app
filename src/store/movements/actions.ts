import { GET_CURRENTWEATHER, SET_STORED_CURRENTWEATHER } from './actionTypes';

export interface GetCurrentWeatherPayload {
  latitude: number;
  longitude: number;
}

export function getCurrentWeather({ latitude, longitude }: GetCurrentWeatherPayload) {
  return {
    type: GET_CURRENTWEATHER,
    payload: { latitude, longitude },
  };
}

export function setStoredCurrentWeather({ city, temp, temp_max, temp_min, weather }) {
  return {
    type: SET_STORED_CURRENTWEATHER,
    payload: { city, temp, temp_max, temp_min, weather },
  };
}
