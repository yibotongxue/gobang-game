import { useState } from "react";
import Piece from "./Piece";
import './Board.css'

function Board() {
    const [boardState, setBoardState] = useState(Array(15).fill(null).map(() => Array(15).fill(null)));
    console.log(boardState[0]);

    function onClick() {
        // TODO
    }

    return (
        <div className="board">
            {
                boardState.map((row, rowIndex) => (
                    <div key={rowIndex}>
                        {
                            row.map((col, colIndex) => (
                                <div key={`${rowIndex}-${colIndex}`}>
                                    <Piece pieceState={col} onPieceClick={onClick} />
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
