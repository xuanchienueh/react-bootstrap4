import { combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";

const rootReducer = combineReducers({
  // reducer con
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
