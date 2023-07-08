import { combineReducers } from "redux";
import currencyReducer from "./currencyReducer";
const reducer = combineReducers({
  currency: currencyReducer,
  
});

export default reducer;
