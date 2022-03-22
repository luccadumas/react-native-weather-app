import { call, all, fork, put, takeLatest } from 'redux-saga/effects';

import { GET_CURRENTWEATHER } from './actionTypes';
import { setStoredCurrentWeather, GetCurrentWeatherPayload } from './actions';

import { api } from '../../services/api';

function* getCurrentWeatherMiddleware({ payload }: { payload: GetCurrentWeatherPayload }) {
  try {
    console.log(payload)
    const { latitude, longitude } = payload;

    const response = yield call(api.get, `weather?lat=${latitude}&lon=${longitude}&appid=ead617ec2dba6d888611653b004c0c2a&lang=pt_br&units=metric`, {
      // params: {
      //   startDate: startDate.toISOString(),
      //   endDate: endDate.toISOString(),
      // }
    });

    console.log(response.data, "SAGAGAAGAGAG")
    
    const { name, main, weather } = response.data;

    yield put(setStoredCurrentWeather({ city: name, temp: main.temp, temp_max: main.temp_max, temp_min: main.temp_min, weather: weather[0].description }));
  } catch (error) {
    console.log(error, "AQIOIOOIJIJIJIJ ERROR")
    const message = 'falha ao recuperar movimentações';
  }
}

export function* watchGetCurrentWeather() {
  // @ts-ignore
  yield takeLatest(GET_CURRENTWEATHER, getCurrentWeatherMiddleware);
}

function* weatherSaga() {
  yield all([fork(watchGetCurrentWeather)]);
}

export default weatherSaga;
