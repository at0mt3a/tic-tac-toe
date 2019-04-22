import React, { Component } from "react";
import Board from "./components/board.js";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="page">
        <div className="app">
          <div className="header" />
          <div className="containerBoard">
            <Board />
          </div>
          <div className="footer" />
        </div>
      </div>
    );
  }
}

export default App;
