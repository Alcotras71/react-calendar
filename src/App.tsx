import React from "react";
import UserCardContainer from "./Components/UserCard/DateTimeCardContainer";
import DatepickerContainer from "./Components/Datepicker/DatepickerContainer";

import "./scss/global/reset.scss";
import "./scss/global/global.scss";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="app__wrapper">
          <DatepickerContainer />
          <UserCardContainer />
        </div>
      </div>
    );
  }
}

export default App;
