import React, { Component } from "react";
import BlankPiece from "./blankPiece.js";
import "./board.css";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: {
        active: false,
        nextTurn: 0,
        board: [["", "", ""], ["", "", ""], ["", "", ""]]
      }
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
