import React, { Component } from "react";
import "./App.css";
import Smurf from "../components/smurfs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Smurf />
      </div>
    );
  }
}

export default App;
