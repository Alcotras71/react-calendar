import React from "react";
import DateTimeCardContainer from "./Components/EventForm/EventFormContainer";
import DatepickerContainer from "./Components/Datepicker/DatepickerContainer";

import "./scss/global/reset.scss";
import "./scss/global/global.scss";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="app__wrapper">
          <DatepickerContainer />
          <DateTimeCardContainer />
        </div>
      </div>
    );
  }
}

export default App;
