function CaculateWinner(boardState) {
    let m = boardState.length;
    let n = boardState[0].length;
    for (let rowIndex = 0; rowIndex < m; rowIndex++) {
        for (let colIndex = 0; colIndex < n; colIndex++) {
            if (boardState[rowIndex][colIndex] && CaculateWinnerOnOnePlace(rowIndex, colIndex)) {
                return boardState[rowIndex][colIndex];
            }
        }
    }
    return null;

    function CaculateWinnerOnOnePlace(rowIndex, colIndex) {

        return CheckLine(0, 1) || CheckLine(1, 0) || CheckLine(1, 1) || CheckLine(1, -1);

        function CheckLine(xStep, yStep) {
            let m = boardState.length;
            let n = boardState[0].length;
            let state = boardState[rowIndex][colIndex];
            let cnt = 1;
            let i = rowIndex + xStep, j = colIndex + yStep;
            while (i >= 0 && i < m && j >= 0 && j < n && boardState[i][j] === state) {
                cnt++;
                i+= xStep;
                j+= yStep;
            }
            i = rowIndex - xStep, j = colIndex - yStep;
            while (i >= 0 && i < m && j >= 0 && j < n && boardState[i][j] === state) {
                cnt++;
                i-=xStep;
                j-=yStep;
            }
            return cnt >= 5;
        }
    }
}

export {CaculateWinner};
