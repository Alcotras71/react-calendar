import React from 'react';
import "./style.scss";
import Header from './Components/Header';

class App extends React.Component {

  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <div className="app-wrapper">
        <Header publish="storyBook"/>
      </div>
    );
  }
}


export default App;