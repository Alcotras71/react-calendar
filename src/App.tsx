import React from "react";
import DatepickerContainer from "./Components/Datepicker/DatepickerContainer";
import EventCardContainer from "./Components/EventCard/EventCardContainer";
import WeatherWidgetContainer from "./Components/WeatherWidget/WeatherWidgetContainer";

import "./scss/global/reset.scss";
import "./scss/global/global.scss";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="app__wrapper">
          <DatepickerContainer />
          <EventCardContainer />
        </div>
        <div>
          <WeatherWidgetContainer />
        </div>
      </div>
    );
  }
}

export default App;
