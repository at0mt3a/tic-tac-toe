import React, { Component } from "react";
import BlankPiece from "./blankPiece.js";
import "./board.css";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zeroZero: null,
      zeroOne: null,
      zeroTwo: null,
      oneZero: null,
      oneOne: null,
      oneTwo: null,
      twoZero: null,
      twoOne: null,
      twoTwo: null
    };
  }

  render() {
    return (
      <div className="board">
        <div className="row">
          <BlankPiece />
          <BlankPiece />
          <BlankPiece />
        </div>
        <div className="row">
          <BlankPiece />
          <BlankPiece />
          <BlankPiece />
        </div>
        <div className="row">
          <BlankPiece />
          <BlankPiece />
          <BlankPiece />
        </div>
      </div>
    );
  }
}

export default Board;
