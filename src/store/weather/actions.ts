import { GET_CURRENTWEATHER, GET_ONECALL, SET_STORED_CURRENTWEATHER, SET_STORED_ONECALL } from './actionTypes';

export interface GetCurrentWeatherPayload {
  latitude: number;
  longitude: number;
}

export interface SetCurrentWeatherPayload {
  city: Text;
  temp: number;
  temp_max: number;
  temp_min: number;
  weather: Text;
}

export interface DailyType {
  dt: number;
  wind_speed: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  weather: [
    {
      description: Text;
      icon: Text;
    }
  ]
}
export interface SetOneCallPayload {
  daily: [DailyType];
  description: Text;
  event: Text;
}

export function getCurrentWeather({ latitude, longitude }: GetCurrentWeatherPayload) {
  return {
    type: GET_CURRENTWEATHER,
    payload: { latitude, longitude },
  };
}

export function getOneCall({ latitude, longitude }: GetCurrentWeatherPayload) {
  return {
    type: GET_ONECALL,
    payload: { latitude, longitude },
  };
}

export function setStoredCurrentWeather({ city, temp, temp_max, temp_min, weather }: SetCurrentWeatherPayload) {
  return {
    type: SET_STORED_CURRENTWEATHER,
    payload: { city, temp, temp_max, temp_min, weather },
  };
}

export function setStoredOneCall({ daily, description, event }: SetOneCallPayload) {
  return {
    type: SET_STORED_ONECALL,
    payload: { daily, description, event },
  };
}
