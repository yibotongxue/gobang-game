import './Piece.css'

function Piece({ pieceState, onPieceClick }) {
    return (
        <div className={`cell ${pieceState}`} onClick={onPieceClick}></div>
    )
}

export default Piece
