const board = document.getElementById("board");

function getSquarePosition(x, y) {
    const line = board.getElementsByClassName("line")[y - 1];
    let linePos = line.offsetTop + line.clientTop + 'px';
    const square = line.childNodes[x - 1];
    let squarePos = square.offsetLeft + square.clientLeft + 'px';
    let position = [squarePos, linePos];
    return position;
}

function insertPiece(pieceName, x, y) {
    const position = getSquarePosition(x, y);
    const piece = document.createElement("div");
    piece.classList.add("piece");
    piece.style.backgroundImage = `url('./img/${pieceName}.svg')`;
    piece.style.left = position[0];
    piece.style.top = position[1];
    board.appendChild(piece);
}

function insertPieces() {
    let color = 'black';
    let x = 1;
    let y = 1;
    while (y < 9 && x < 9) {
        if(y == 2 || y == 7)
        insertPiece('pawn-' + color, x, y);
        if((y == 1 || y == 8) && (x == 1 || x == 8))
        insertPiece('tower-' + color, x, y);
        if((y == 1 || y == 8) && (x == 2 || x == 7))
        insertPiece('horse-' + color, x, y);
        if((y == 1 || y == 8) && (x == 3 || x == 6))
        insertPiece('bishop-' + color, x, y);
        if((y == 1 || y == 8) && x == 4 )
        insertPiece('queen-' + color, x, y);
        if((y == 1 || y == 8) && x == 5 )
        insertPiece('king-' + color, x, y);
        x++;
        if (x == 9) {
            y++;
            x = 1;
        }
        if (y > 2) {
            color = 'white'
        };
    }
}

// function adjustOnResize() {
//     console.log("adjust")
//     let pieces = board.getElementsByClassName("piece");
//     for (var i = 0; i < pieces.length; i++) {
//         let piece = pieces[i];
//         var position = getSquarePosition(x, y);
//         piece.style.left = position[0];
//         piece.style.top = position[1];
//     };
// }

export { insertPieces };