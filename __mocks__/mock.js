export const mockEventData = {
  eventDataArr: [
    {
      touchedDate: "2021-07-27T21:00:00.000Z",
      startTime: "12:00",
      endTime: "12:30",
      eventName: "mocki",
    },
    {
      touchedDate: "2021-09-27T21:00:00.000Z",
      startTime: "16:00",
      endTime: "18:30",
      eventName: "Loki-moki",
    },
    {
      touchedDate: "2021-07-29T21:00:00.000Z",
      startTime: "9:00",
      endTime: "10:30",
      eventName: "PockMocki",
    },
  ],
  eventData: {
    touchedDate: "2021-07-27T21:00:00.000Z",
    startTime: "12:00",
    endTime: "12:30",
    eventName: "mocki",
  },
  eventData2: {
    touchedDate: "2021-08-27T21:00:00.000Z",
    startTime: "11:00",
    endTime: "15:30",
    eventName: "mocddd",
  },
};

export const mockWeatherData = {
  coord: { lon: 37.6111, lat: 54.2044 },
  weather: [{ id: 804, main: "Clouds", description: "пасмурно", icon: "04d" }],
  base: "stations",
  main: {
    temp: 18.57,
    feels_like: 18.57,
    temp_min: 18.57,
    temp_max: 18.57,
    pressure: 1014,
    humidity: 80,
    sea_level: 1014,
    grnd_level: 996,
  },
  visibility: 10000,
  wind: { speed: 2.53, deg: 155, gust: 7.58 },
  clouds: { all: 100 },
  dt: 1627476561,
  sys: { country: "RU", sunrise: 1627436115, sunset: 1627493797 },
  timezone: 10800,
  id: 480562,
  name: "Тула",
  cod: 200,
};
