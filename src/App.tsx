import React from "react";
import EventFormContainer from "./Components/EventForm/EventFormContainer";
import DatepickerContainer from "./Components/Datepicker/DatepickerContainer";

import "./scss/global/reset.scss";
import "./scss/global/global.scss";
import EventListContainer from "./Components/EventList/EventListContainer";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="app__wrapper">
          <DatepickerContainer />
          <EventFormContainer />
          <EventListContainer />
        </div>
      </div>
    );
  }
}

export default App;
