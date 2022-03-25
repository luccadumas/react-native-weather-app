import { GET_CURRENTWEATHER, GET_ONECALL, SET_STORED_CURRENTWEATHER, SET_STORED_ONECALL } from './actionTypes';

export interface GetCurrentWeatherPayload {
  latitude: Number;
  longitude: Number;
}

export interface SetCurrentWeatherPayload {
  city: String;
  temp: Number;
  temp_max: Number;
  temp_min: Number;
  weather: String;
}

export interface DailyType {
  dt: Number;
  wind_speed: Number;
  temp: {
    day: Number;
    min: Number;
    max: Number;
    night: Number;
    eve: Number;
    morn: Number;
  };
  weather: [
    {
      description: String;
      icon: String;
    }
  ]
}
export interface SetOneCallPayload {
  daily: [DailyType];
  description: String;
  event: String;
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
