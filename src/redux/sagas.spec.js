import regeneratorRuntime from "regenerator-runtime";
import React from "react";
import { runSaga } from "redux-saga";
import { takeEvery } from "redux-saga/effects";
import { sagaWatcher, sagaWorker } from "./sagas";
import { weatherAPI } from "../api/api";
import { getWeatherInfo, REQUEST_WEATHER } from "./weatherReducer";
import { hideLoader, showLoader } from "./appReducer";
import { mockWeatherData } from "../../__mocks__/mock";

describe("sagaWatcher", () => {
  const genObject = sagaWatcher();

  it("should wait for every REQUEST_WEATHER action and call sagaWorker", () => {
    expect(genObject.next().value).toEqual(
      takeEvery(REQUEST_WEATHER, sagaWorker)
    );
  });

  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe("sagaWorker", () => {
  it("should call api and dispatch success action", async () => {
    const dummyData = mockWeatherData;
    const requestWeather = jest
      .spyOn(weatherAPI, "fetchWeatherInfo")
      .mockImplementation(() => Promise.resolve(dummyData));
    const dispatched = [];
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      sagaWorker
    );

    expect(requestWeather).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([
      showLoader(),
      getWeatherInfo(dummyData),
      hideLoader(),
    ]);
    requestWeather.mockClear();
  });

  it("should call api and handle error", async () => {
    const requestWeather = jest
      .spyOn(weatherAPI, "fetchWeatherInfo")
      .mockImplementation(() => Promise.reject());

    expect(requestWeather).toHaveBeenCalledTimes(0);
    requestWeather.mockClear();
  });
});
