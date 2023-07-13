import { combineReducers } from "redux";
import currencyReducer from "./currencyReducer";
import blogsReducer from "./BlogReducer";
const reducer = combineReducers({
  currency: currencyReducer,
  blogs: blogsReducer,
});

export default reducer;
