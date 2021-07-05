import { combineReducers, compose, createStore } from "redux";
import datepickerReducer from "./datepickerReducer";

const RootReducer = combineReducers({
  datepicker: datepickerReducer,
});

type RootReducerType = typeof RootReducer;
export type AppStateType = ReturnType<RootReducerType>;

const store = createStore(RootReducer, {}, (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() || compose);

// @ts-ignore
window.store = store;

export default store;
