import React, { Component } from "react";
import "./App.css";

class App extends Component {
  store = {
    todos: [],
    message: ""
  };

  render() {
    return <div className="App">FS Todo App</div>;
  }
}

export default App;
