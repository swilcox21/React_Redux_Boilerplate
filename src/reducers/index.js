import { combineReducers } from 'redux';
import counterReducer from './counter';
import toggleReducer from './toggle';

const allReducers = combineReducers({
  counterReducer,
  toggleReducer,
});

export default allReducers;
