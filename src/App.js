import React, { Component } from "react";
import Board from "./components/board.js";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="page">
        <div className="app">
          <div className="containerBoard">
            <Board />
          </div>
        </div>
        <div className="terminal" />
      </div>
    );
  }
}

export default App;
