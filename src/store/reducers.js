import { combineReducers } from 'redux';

// Authentication
// import Auth from './auth/reducer';
// import SafeBoxes from './safeBoxes/reducer';
import Movements from './movements/reducer';
// import Transactions from './transactions/reducer';
// import Contracts from './contracts/reducer';
// import Notifications from './services/notifications/reducer';

const rootReducer = combineReducers({
  // public
  // Auth,
  // SafeBoxes,
  Movements,
  // Transactions,
  // Contracts,
  // Notifications,
});

export default rootReducer;
