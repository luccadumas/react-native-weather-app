import { combineReducers } from 'redux';

import Weather from './weather/reducer';

const rootReducer = combineReducers({
  Weather,
});

export default rootReducer;
