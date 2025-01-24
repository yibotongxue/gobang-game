import { useState } from "react";
import Piece from "./Piece";
import './Board.css'

function Board() {
    const [boardState, setBoardState] = useState(Array(15).fill(null).map(() => Array(15).fill(null)));
    const [blackIsNext, setBlackIsNext] = useState(true);

    function getPieceOnClick(rowIndex, colIndex) {
        function pieceOnClick() {
            if (boardState[rowIndex][colIndex]) {
                return;
            }
            let nextBoardState = boardState.slice();
            nextBoardState[rowIndex][colIndex] = blackIsNext ? 'black' : 'white';
            setBoardState(nextBoardState);
            setBlackIsNext(!blackIsNext);
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
