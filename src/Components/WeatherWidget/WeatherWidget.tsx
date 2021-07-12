import React, { FC } from "react";
import { WeatherInfo } from "../../types/types";

type PropsType = {
  weatherInfo: WeatherInfo | null;
};

const WeatherWidget: FC<PropsType> = ({ weatherInfo }) => {
  console.log(weatherInfo);

  if (!weatherInfo) {
    return <div>INFO</div>;
  } else {
    return <div>{weatherInfo.weather[0].description}</div>;
  }
};

export default WeatherWidget;
