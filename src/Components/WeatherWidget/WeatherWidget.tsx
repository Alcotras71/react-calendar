import React, { FC } from "react";
import { WeatherInfo } from "../../types/types";
import imgArr from "../../utils/helpers/images/widget-images";
import { returnDesiredImage } from "../../utils/helpers/images/image-helpers";
import "./weatherWidget.scss";
import Preloader from "../common/Preloader/Preloader";

type PropsType = {
  weatherInfo: WeatherInfo | null;
};

const WeatherWidget: FC<PropsType> = ({ weatherInfo }) => {
  return !weatherInfo ? (
    <div style={{ position: "relative" }}>
      <Preloader />
    </div>
  ) : (
    <div className="weather-widget">
      <div className="weather-widget__wrapper">
        <div className="weather-widget__text-wrapper">
          <h3 className="weather-widget__city">{weatherInfo.name}</h3>
          <p className="weather-widget__descr">
            {weatherInfo.weather[0].description}
          </p>
        </div>
        <div className="weather-widget__image">
          <img
            src={returnDesiredImage(imgArr, weatherInfo.weather[0].icon)?.value}
            alt="widget_icon"
          />
        </div>
      </div>
      <div className="weather-widget__params">
        <div className="weather-widget__temp">{`${Math.round(
          weatherInfo.main.temp
        )}°C`}</div>
        <div className="weather-widget__details-wrapper">
          <h4 className="weather-widget__details">Детально</h4>
          <ul className="weather-widget__info-list">
            <li className="weather-widget__item">
              <span>Ощущается как</span> -{" "}
              <span>{`${Math.round(weatherInfo.main.feels_like)}°C`}</span>
            </li>
            <li className="weather-widget__item">
              <span>Ветер</span> -{" "}
              <span>{`${weatherInfo.wind.speed} м/с`}</span>
            </li>
            <li className="weather-widget__item">
              <span>Влажность</span> -{" "}
              <span>{`${weatherInfo.main.humidity}%`}</span>
            </li>
            <li className="weather-widget__item">
              <span>Давление</span> -{" "}
              <span>{`${weatherInfo.main.pressure} гПа`}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
