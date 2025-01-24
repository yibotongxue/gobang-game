import { useState } from "react";
import './Piece.css'

function Piece({ pieceState, onPieceClick }) {
    // TODO
    return (
        <div className="cell" onClick={onPieceClick}>
        </div>
    )
}

export default Piece
