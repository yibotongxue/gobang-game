import { useState } from "react";
import {CaculateWinner} from '../utilities.js';
import Piece from "./Piece";
import './Board.css'

function Board({ boardState, blackIsNext, winner, handlePlay }) {

    function getPieceOnClick(rowIndex, colIndex) {
        function pieceOnClick() {
            if (boardState[rowIndex][colIndex] || winner) {
                return;
            }
            let nextBoardState = structuredClone(boardState);
            nextBoardState[rowIndex][colIndex] = blackIsNext ? 'black' : 'white';
            handlePlay(nextBoardState);
        }
        return pieceOnClick;
    }

    return (
        <div className="board">
            {
                boardState.map((row, rowIndex) => (
                    <div key={rowIndex}>
                        {
                            row.map((col, colIndex) => (
                                <div key={`${rowIndex}-${colIndex}`}>
                                    <Piece pieceState={col} onPieceClick={getPieceOnClick(rowIndex, colIndex)} />
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
}

export default Board;
