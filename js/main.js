import { insertPieces, adjustOnResize } from "./pieces.js";
import { buildBoard } from "./board.js";

var x = 1;
var y = 1;

buildBoard();
insertPieces();

window.onresize = adjustOnResize(x, y);