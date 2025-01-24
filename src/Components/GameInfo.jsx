import { useState } from "react";

function GameInfo({content}) {
    return (
        <div>
            <h1>五子棋</h1>
            <p>{content}</p>
        </div>
    )
}

export default GameInfo;
