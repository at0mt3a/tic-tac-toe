import React, { Component } from "react";
import BlankPiece from "./blankPiece.js";
import "./board.css";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextTurn: 1,
      "0_0": null,
      "0_1": null,
      "0_2": null,
      "1_0": null,
      "1_1": null,
      "1_2": null,
      "2_0": null,
      "2_1": null,
      "2_2": null
    };
  }

  takeTurn = event => {};

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
