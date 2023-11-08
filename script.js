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

function knight(start, finish) {
  const boardsize = 8;
  const dx = [-2, -1, 1, 2, -2, -1, 1, 2];
  const dy = [-1, -2, -2, -1, 1, 2, 2, 1];
  let queue = [];
  let visited = new Array(boardsize).fill(0).map(() => new Array(boardsize).fill(false));
  let path = new Array(boardsize).fill(0).map(() => new Array(boardsize).fill(''));

  function isInsideBoard(x, y) {
    return (x >= 0 && x < boardsize && y >= 0 && y < boardsize);
  }

  queue.push([start[0], start[1], 0]);
  path[start[0]][start[1]] = `(${start[0]},${start[1]})`;

  while (queue.length > 0) {
    let t = queue.shift();
    if (t[0] == finish[0] && t[1] == finish[1]) {
      return path[t[0]][t[1]];
    }

    for (let i = 0; i < 8; i++) {
      let x = t[0] + dx[i];
      let y = t[1] + dy[i];

      if (isInsideBoard(x, y) && !visited[x][y]) {
        visited[x][y] = true;
        path[x][y] = path[t[0]][t[1]] + ` -> (${x},${y})`;
        queue.push([x, y, t[2] + 1]);
      }
    }
  }
  return 'No path found';
}

