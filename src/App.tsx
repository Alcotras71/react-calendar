import React from "react";
import DatepickerContainer from "./Components/Datepicker/DatepickerContainer";
import DataEvent from "./Components/DataEvent/DataEvent";

import "./scss/style.scss";

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <DatepickerContainer />
        <DataEvent />
      </div>
    );
  }
}

export default App;
