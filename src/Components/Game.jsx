import { useState } from "react";
import Board from "./Board";
import './Game.css'
import GameInfo from "./GameInfo";
import { CaculateWinner } from "../utilities";

function Game() {
    const [history, setHistory] = useState([Array(15).fill(null).map(() => Array(15).fill(null))]);
    const currentBoard = history[history.length - 1];
    const blackIsNext = history.length % 2 == 1;

    let winner = CaculateWinner(currentBoard);

    let content = winner ? ((winner === 'black' ? "黑方":"白方") + "获胜") : (blackIsNext ? "当前为黑方":"当前为白方");

    function revert() {
        if (history.length > 1) {
            let nextHistory = [...history.slice(0, history.length - 1)];
            setHistory(nextHistory);
        }
    }

    function restart() {
        if (history.length > 1) {
            let nextHistory = [...history.slice(0, 1)];
            setHistory(nextHistory);
        }
    }

    function addBoardState(boardState) {
        let nextHistory = [...history.slice(), boardState];
        setHistory(nextHistory);
    }

    return (
        <div>
            <div className="buttom-group">
                <button onClick={revert}>撤销</button>
                <button onClick={restart}>重新开始</button>
            </div>
            <GameInfo content={content} />
            <Board boardState={currentBoard} blackIsNext={blackIsNext} winner={winner} handlePlay={addBoardState} />
        </div>
    )
}

export default Game;
