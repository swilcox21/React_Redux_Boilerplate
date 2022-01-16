import { combineReducers } from "redux";
import counterReducer from "../counter/counterReducer";
import toggleReducer from "../toggle/toggleReducer";

const allReducers = combineReducers({
  counterReducer,
  toggleReducer,
});

export default allReducers;
