import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    todos: [],
    message: ""
  };

  componentDidMount() {
    axios.get("http://localhost:8000/api/message").then(res => {
      this.setState({ message: res.data });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>FS Todo App</h1>
        <p>Message: {this.state.message}</p>
      </div>
    );
  }
}

export default App;
