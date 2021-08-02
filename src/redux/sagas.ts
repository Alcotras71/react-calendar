import { SagaIterator } from "@redux-saga/types";
import { call, put, takeEvery } from "redux-saga/effects";
import { weatherAPI } from "../api/api";
import { WeatherInfo } from "../types/types";
import { hideLoader, showLoader } from "./appReducer";
import { getWeatherInfo, REQUEST_WEATHER } from "./weatherReducer";

export function* sagaWatcher(): SagaIterator {
  yield takeEvery(REQUEST_WEATHER, sagaWorker);
}

export function* sagaWorker(): Generator {
  try {
    yield put(showLoader());
    const payload = yield call(weatherAPI.fetchWeatherInfo, "Tula", "ru");
    yield put(getWeatherInfo(payload as WeatherInfo));
    yield put(hideLoader());
  } catch (e) {
    throw new Error(e);
  }
}
