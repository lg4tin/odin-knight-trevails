/*eslint-disable*/
class Graph { 
  constructor() { 
    this.numberOfNodes = 0;
    this.adjacentList = {
    }; 
  } 
  addVertex(node)  {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  } 
  addEdge(node1, node2) { 
    this.adjacentList[node1].push(node2)
    this.adjacentList[node1].sort();
    this.adjacentList[node2].push(node1)
    this.adjacentList[node2].sort();
  } 
  showConnections() { 
    const allNodes = Object.keys(this.adjacentList); 
    for (let node of allNodes) { 
      let nodeConnections = this.adjacentList[node]; 
      let connections = ""; 
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      } 
      console.log(node + "-->" + connections); 
    } 
} 
} 

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1'); 
myGraph.addEdge('3', '4'); 
myGraph.addEdge('4', '2'); 
myGraph.addEdge('4', '5'); 
myGraph.addEdge('1', '2'); 
myGraph.addEdge('1', '0'); 
myGraph.addEdge('0', '2'); 
myGraph.addEdge('6', '5');

myGraph.showConnections(); 

class ChessBoard {
  constructor() {
    this.board = this.createBoard();
    this.knight = 'Knight';
  }

  createBoard() {
    let board = [];
    for (let i = 0; i < 8; i++) {
      board[i] = [];
      for (let j = 0; j < 8; j++) {
        board[i].push([i, j]);
      }
    }
    return {board};
  }

  getBoard(start) {
    return this.board[3][3];
  }

  knightMoves(start, end) {

  }
}

const chessBoard1 = new ChessBoard()

function isInsideBoard(x, y) {
  return x >= 0 && x <= 8 && y >= 0 && y <= 8;
}