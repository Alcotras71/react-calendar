import React from "react";
import { mockWeatherData } from "../../__mocks__/mock";
import {
  weatherReducer,
  initialState,
  requestWeather,
  getWeatherInfo,
  GET_WEATHER_INFO,
  REQUEST_WEATHER,
} from "./weatherReducer";

describe("weatherReducer", () => {
  describe("check reducer work", () => {
    it("returns the initial state", () => {
      expect(weatherReducer(undefined, {})).toEqual(initialState);
    });

    it("handles get weather info", () => {
      expect(
        weatherReducer(initialState, {
          type: GET_WEATHER_INFO,
          payload: mockWeatherData,
        })
      ).toEqual({ ...initialState, weatherInfo: mockWeatherData });
    });
  });

  describe("check action creators", () => {
    it("requestWeather AC", () => {
      expect(requestWeather()).toStrictEqual({ type: REQUEST_WEATHER });
    });

    it("getWeatherInfo AC", () => {
      expect(getWeatherInfo(mockWeatherData)).toStrictEqual({
        type: GET_WEATHER_INFO,
        payload: mockWeatherData,
      });
    });
  });
});
