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
    for (var i = 0; i < 63; i++) {
        if (i == 0 || i == 7 || i == 56 || i == 63) {
            insertPiece('tower-' + color, x, y);
            console.log(x, y)
        }
        x++;
        if (x == 7) {
            y++;
            x = 1;
        }
        if(y > 2 ) color = 'white';
    }
}

function adjustOnResize(x, y) {
    let pieces = board.getElementsByClassName("piece");
    for (var i = 0; i < pieces.length; i++) {
        let piece = pieces[i];
        var position = getSquarePosition(x, y);
        piece.style.left = position[0];
        piece.style.top = position[1];
    };
}

export { insertPieces, adjustOnResize };