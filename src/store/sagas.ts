import {all} from 'redux-saga/effects';

// public
import WeatherSaga from './weather/saga';

export default function* rootSaga() {
  yield all([
    WeatherSaga(),
  ]);
}
