import { combineReducers, compose, createStore } from "redux";
import { setLocalStorageEventData } from "../common/localStorage";
import datepickerReducer from "./datepickerReducer";

const RootReducer = combineReducers({
  datepicker: datepickerReducer,
});

type RootReducerType = typeof RootReducer;
export type AppStateType = ReturnType<RootReducerType>;

const store = createStore(
  RootReducer,
  {},
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() || compose
);

// store.subscribe(() => {
//   setLocalStorageEventData(store.getState().datepicker.eventData);
// });

// @ts-ignore
window.store = store;

export default store;
