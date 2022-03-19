import { SET_STORED_CURRENTWEATHER } from './actionTypes';

const INITIAL_STATE = {
  // storedMovementsSafeBox: {},
  // storedMovements: [],
  storedCity: null,
  storedTemp: null,
  storedTempMax: null,
  storedTempMin: null,
  storedWeather: null
};

const movements = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_STORED_CURRENTWEATHER: {
      const {
        city: storedCity,
        temp: storedTemp,
        temp_max: storedTempMax,
        temp_min: storedTempMin,
        weather: storedWeather
      } = action.payload;

      return {
        ...state,
        storedCity,
        storedTemp,
        storedTempMax,
        storedTempMin,
        storedWeather
      };
    }
    default:
      return { ...state };
  }
};

export default movements;
