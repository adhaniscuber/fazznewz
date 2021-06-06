import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import rootReducer from "../reducers";

const initialState = {};
const reducers = combineReducers({
  rootReducer,
});
const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleware),
);
export default store;
