import axios from "axios";
import { WeatherInfo } from "../types/types";

const API_KEY = "ab9111e3a6d8e836f9a774a8508ff234";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

export const weatherAPI = {
  fetchWeatherInfo(city: string, lang: string) {
    return instance
      .get<WeatherInfo>(
        `weather?q=${city}&lang=${lang}&units=metric&appid=${API_KEY}`
      )
      .then((response) => response.data);
  },
};

// const baseURL = "https://api.openweathermap.org/data/2.5/";

// export async function getWeatherInfoAPI(
//   city: string,
//   lang: string
// ): Promise<WeatherInfo> {
//   const response = await fetch(
//     `${baseURL}weather?q=${city}&lang=${lang}&appid=${API_KEY}`
//   );
//   return await response.json();
// }
