import React, { Component } from "react";
import "./App.css";
import Smurf from "../components/smurfs";
import SmurfForm from "../components/smurfForm"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Smurf />
        <h2>Add to the smurf population!</h2>
        <SmurfForm />
      </div>
    );
  }
}

export default App;
