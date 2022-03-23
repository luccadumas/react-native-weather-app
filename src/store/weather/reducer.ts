import {SET_STORED_CURRENTWEATHER, SET_STORED_ONECALL} from './actionTypes';

const INITIAL_STATE = {
  loading: true,
  storedCity: null,
  storedTemp: null,
  storedTempMax: null,
  storedTempMin: null,
  storedWeather: null,
  storedDailyList: [],
  storedDescription: null,
  storedEvent: null,
};

const weather = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_STORED_CURRENTWEATHER: {
      const {
        city: storedCity,
        temp: storedTemp,
        temp_max: storedTempMax,
        temp_min: storedTempMin,
        weather: storedWeather,
      } = action.payload;

      return {
        ...state,
        storedCity,
        storedTemp,
        storedTempMax,
        storedTempMin,
        storedWeather,
      };
    }
    case SET_STORED_ONECALL: {
      const {
        description: storedDescription,
        event: storedEvent,
        daily: storedDailyList,
      } = action.payload;

      return {
        ...state,
        loading: false,
        storedDailyList,
        storedDescription,
        storedEvent,
      };
    }
    default:
      return {...state};
  }
};

export default weather;
