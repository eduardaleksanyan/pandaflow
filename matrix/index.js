function parseMatrix(input) {
  const rows = input.split(';');
  return rows.map(row => row.split(',').map(Number));
}

function findRegions(matrix) {
  const visited = new Set();
  let regions = 0;

  function dfs(row, col) {
    if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length) {
      return;
    }

    if (matrix[row][col] === 1 && !visited.has(`${row}-${col}`)) {
      visited.add(`${row}-${col}`);
      dfs(row - 1, col);
      dfs(row + 1, col);
      dfs(row, col - 1);
      dfs(row, col + 1);
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 1 && !visited.has(`${i}-${j}`)) {
        regions++;
        dfs(i, j);
      }
    }
  }

  return regions;
}

function main() {
  const input = process.argv[2];
  const matrix = parseMatrix(input);
  const regionCount = findRegions(matrix);
  console.log(`Regions: ${regionCount}`);
}

main();