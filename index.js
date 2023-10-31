function createBoard(){
		const array = new Array(8);
		for (let i = 0; i < 8; i++){
				array[i] = new Array(8).fill(null);
		}
		return array;
}

const knightMoves = [
		[-2, -1],
		[-1, -2],
		[1, -2],
		[2, -1],
		[2, 1],
		[1, 2],
		[-1, 2],
		[-2, 1]
	];

function isMoveValid(x, y){
		if (x > 7 || x < 0 || y < 0 || y > 7){
				return false
		}
		return true;
}



function allPossibleMoves(position){
		let result = [];
		for (let i = 0; i < 8; i++){
				let x = position[0]+knightMoves[i][0];
				let y = position[1]+knightMoves[i][1];
				if (isMoveValid(x, y)){
						result.push([x,y]);
				}
		}
		return result;
}

function arraysAreEqual(arr1, arr2) {
		if (arr1.length !== arr2.length) {
			return false;
		}
	
		for (let i = 0; i < arr1.length; i++) {
			if (arr1[i] !== arr2[i]) {
				return false;
			}
		}
	
		return true;
}

function arrayInclude(arr, elem){
		for (let i of arr){
				if (arraysAreEqual(i, elem)){
						return true;
				}
		}
		return false;
}



function shortestPath(start, end) {
	const queue = [[start]];
	const visited = new Set();
  
	let steps = 0; // Track the number of steps taken
  
	while (queue.length > 0) {
	  steps++; // Increment the step count
	  console.log(`Step ${steps}: Queue:`, queue);
  
	  const currentPath = queue.shift();
	  const currentPosition = currentPath[currentPath.length - 1];
  
	  if (arraysAreEqual(currentPosition, end)) {
		// If the current position matches the end, you've found the shortest path
		console.log(`Step ${steps}: Found the shortest path!`);
		return currentPath;
	  }
  
	  if (!visited.has(currentPosition.toString())) {
		visited.add(currentPosition.toString());
  
		const possibleMoves = allPossibleMoves(currentPosition);
		console.log(`Step ${steps}: Visiting ${currentPosition}. Possible moves:`, possibleMoves);
  
		for (const move of possibleMoves) {
		  if (!visited.has(move.toString())) {
			// Clone the current path and add the new position to it
			const newPath = currentPath.slice();
			newPath.push(move);
			console.log(`Step ${steps}: Adding ${move} to the queue. New path:`, newPath);
			queue.push(newPath);
		  }
		}
	  }
	}
  
	console.log(`Step ${steps}: No path found.`);
	return []; // If no path is found
  }

console.log(shortestPath([0,0],[1,2]));