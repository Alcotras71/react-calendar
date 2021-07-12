import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { datepickerReducer } from "./datepickerReducer";
import { weatherReducer } from "./weatherReducer";

export const rootReducer = combineReducers({
  app: appReducer,
  datepicker: datepickerReducer,
  weather: weatherReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;
