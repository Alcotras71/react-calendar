import React from 'react';
import Datepicker from './Components/Datepicker/Datepicker'
import DataEvent from './Components/DataEvent/DataEvent'

import "./style.scss";

class App extends React.Component {
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <div className="app-wrapper">
        <Datepicker />
        <DataEvent/>
      </div>
    );
  }
}


export default App;