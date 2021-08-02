import regeneratorRuntime from "regenerator-runtime";
import axios from "axios";
import { mockWeatherData } from "../../__mocks__/mock";

jest.mock("axios");

describe("fetchWeatherInfo", () => {
  const api =
    "https://api.openweathermap.org/data/2.5/weather?q=Tula&lang=ru&units=metric&appid=ab9111e3a6d8e836f9a774a8508ff234";

  const fetchData = async () => {
    return await axios.get(api);
  };

  it("fetches successfully data from an API", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(mockWeatherData));

    await expect(fetchData()).resolves.toEqual(mockWeatherData);

    expect(axios.get).toHaveBeenCalledWith(api);
  });

  it("fetches erroneously data from an API", async () => {
    const errorMessage = "Network error";
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
    await expect(fetchData()).rejects.toThrow(errorMessage);
  });
});
