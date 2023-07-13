import { createStore, applyMiddleware } from "redux";
import loggerMiddleware from "./middleware/logger";
import middleware2 from "./middleware/middleware2";
import thunk from "redux-thunk";
import reducers from "./reducers/index";
export const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk, loggerMiddleware, middleware2)
);
