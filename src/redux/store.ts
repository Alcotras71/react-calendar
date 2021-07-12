import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { setLocalStorageEventData } from "../utils/common/localStorage";
import { rootReducer } from "./rootReducer";
import { sagaWatcher } from "./sagas";

const saga = createSagaMiddleware();
const composeEnhacers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhacers(applyMiddleware(saga))
);

saga.run(sagaWatcher);

store.subscribe(() => {
  setLocalStorageEventData(store.getState().datepicker.eventData);
});

// @ts-ignore
window.store = store;

export default store;
