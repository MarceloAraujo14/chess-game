const board = document.getElementById("board");

let color = 1;

function buildBoard(){
    for(var i=0; i<8; i++){
        board.appendChild(buildLine());
    }
}

function buildLine(){
    let line = document.createElement("div");
    line.classList.add("line");

    for(var i=0; i<8; i++){
        line.appendChild(buildSquare());
    }
    color++;
    return line;
}

function buildSquare(){
    let square = document.createElement("div");
    square.classList.add("square")
    if(color % 2 == 0){
        square.classList.add("black");
    }
    color++;
    return square;
}

function insertPiece(){
    const lines = board.querySelectorAll(".line");
    
    const piece = document.createElement("div");
    piece.classList.add("piece");
    piece.style.backgroundImage = "url('./img/horse.svg')";
    board.appendChild(piece);
}

buildBoard();

insertPiece();