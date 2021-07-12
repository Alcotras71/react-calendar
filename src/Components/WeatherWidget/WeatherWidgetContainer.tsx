import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/rootReducer";
import { requestWeather } from "../../redux/weatherReducer";
import { WeatherInfo } from "../../types/types";
import WeatherWidget from "./WeatherWidget";

type MapStatePropsType = {
  weatherInfo: WeatherInfo | null;
};
type MapDispatchPropsType = {
  requestWeather: () => void;
};

export type PorpsType = MapStatePropsType & MapDispatchPropsType;

class WeatherWidgetContainer extends React.Component<PorpsType> {
  componentDidMount() {
    this.props.requestWeather();
  }

  render = () => {
    return (
      <>
        <WeatherWidget weatherInfo={this.props.weatherInfo} />
      </>
    );
  };
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    weatherInfo: state.weather.weatherInfo,
  };
};

export default connect(mapStateToProps, {
  requestWeather,
})(WeatherWidgetContainer);
