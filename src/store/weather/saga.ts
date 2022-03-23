import { API_TOKEN } from '../../../env.json'
import { call, all, fork, put, takeLatest } from 'redux-saga/effects';

import { GET_CURRENTWEATHER, GET_ONECALL } from './actionTypes';
import { setStoredCurrentWeather, GetCurrentWeatherPayload, setStoredOneCall } from './actions';

import { api } from '../../services/api';
import { customToast } from '../../util/showMessage';

function* getCurrentWeatherMiddleware({ payload }: { payload: GetCurrentWeatherPayload }) {
  try {
    const { latitude, longitude } = payload;
    const response = yield call(api.get, `weather?lat=${latitude}&lon=${longitude}&appid=${API_TOKEN}&lang=pt_br&units=metric`);
    const { name, main, weather } = response.data;

    yield put(setStoredCurrentWeather({ city: name, temp: main.temp, temp_max: main.temp_max, temp_min: main.temp_min, weather: weather[0].description }));
  } catch (error) {
    const message = 'Falha ao recuperar dados';
    customToast(message, 'error');
  }
}

function* getOneCallMiddleware({ payload }: { payload: GetCurrentWeatherPayload }) {
  try {
    const { latitude, longitude } = payload;
    const response = yield call(api.get, `onecall?lat=${latitude}&lon=${longitude}&appid=${API_TOKEN}&lang=pt_br&units=metric&exclude=minutely,hourly`);
    const { daily } = response.data;
    const { description } = response.data?.alerts?.[0] || {};
    const { event } = response.data?.alerts?.[0] || {};

    yield put(setStoredOneCall({ daily, description, event }));
  } catch (error) {
    const message = 'Falha ao recuperar dados';
    customToast(message, 'error');
  }
}

export function* watchGetWeatherOneCall() {
  // @ts-ignore
  yield takeLatest(GET_ONECALL, getOneCallMiddleware);
}

export function* watchGetCurrentWeather() {
  // @ts-ignore
  yield takeLatest(GET_CURRENTWEATHER, getCurrentWeatherMiddleware);
}

function* weatherSaga() {
  yield all([
    fork(watchGetCurrentWeather),
    fork(watchGetWeatherOneCall),
  ]);
}

export default weatherSaga;
