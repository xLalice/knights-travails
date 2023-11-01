function knightMoves(start, end) {
  const boardSize = 8;
  const dx = [2, 1, -1, -2, -2, -1, 1, 2];
  const dy = [1, 2, 2, 1, -1, -2, -2, -1];

  // Helper function to check if a square is within the board
  function isWithinBoard(x, y) {
    return x >= 0 && x < boardSize && y >= 0 && y < boardSize;
  }

  // Initialize a queue for BFS
  const queue = [];
  queue.push({ square: start, path: [start] });

  const visited = new Array(boardSize);
  for (let i = 0; i < boardSize; i++) {
    visited[i] = new Array(boardSize).fill(false);
  }
  visited[start[0]][start[1]] = true;

  while (queue.length > 0){
    let {square, path} = queue.shift();

    if (square[0] === end[0] && square[1] === end[1]){
      return path;
    }

    for (let i = 0; i < boardSize; i++){
      let newX = square[0] + dx[i];
      let newY = square[1] + dy[i];

      if (isWithinBoard(newX, newY) && !visited[newX][newY]){
        visited[newX][newY] = true;
        queue.push({square: [newX, newY], path: path.concat([[newX, newY]])});
      }
    }
  }
  return [];
}

const startSquare = [0, 0];
const endSquare = [7, 7];
const path = knightMoves(startSquare, endSquare);

if (path.length === 0) {
  console.log("No valid path found.");
} else {
  console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
  for (const square of path) {
    console.log(square);
  }
}
