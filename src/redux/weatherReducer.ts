import { WeatherInfo } from "../types/types";

export const enum actions {
  GET_WEATHER_INFO = "weather/GET_WEATHER_INFO",
  REQUEST_WEATHER = "sagas/REQUEST_WEATHER",
}

//--------------------
export const initialState = {
  weatherInfo: null as WeatherInfo | null,
};
type InitialState = typeof initialState;
//--------------------

export const weatherReducer = (
  state = initialState,
  action: ActionsType
): InitialState => {
  switch (action.type) {
    case actions.GET_WEATHER_INFO:
      return { ...state, weatherInfo: action.payload };

    default:
      return state;
  }
};

type ActionsType = RequestWeather | GetWeatherInfo;
//--------------------

//--------------------
type RequestWeather = {
  type: actions.REQUEST_WEATHER;
};
export const requestWeather = (): RequestWeather => {
  return {
    type: actions.REQUEST_WEATHER,
  };
};
//--------------------
type GetWeatherInfo = {
  type: actions.GET_WEATHER_INFO;
  payload: WeatherInfo;
};
export const getWeatherInfo = (payload: WeatherInfo): GetWeatherInfo => {
  return {
    type: actions.GET_WEATHER_INFO,
    payload,
  };
};
