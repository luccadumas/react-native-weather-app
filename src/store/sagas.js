import {all} from 'redux-saga/effects';

// public
// import AuthSaga from './auth/saga';
// import SafeBoxesSaga from './safeBoxes/saga';
import MovementsSaga from './movements/saga';
// import Transactions from './transactions/saga';
// import Contracts from './contracts/saga';
// import Notifications from './services/notifications/saga';
export default function* rootSaga() {
  yield all([
    // public
    // AuthSaga(),
    // SafeBoxesSaga(),
    MovementsSaga(),
    // Transactions(),
    // Contracts(),
    // Notifications(),
  ]);
}
