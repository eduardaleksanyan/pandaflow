function parseMatrix(input) {
  const rows = input.split(';');
  const matrix = rows.map(row => row.split(',').map(Number));

  const numRows = matrix.length;
  const numCols = matrix[0].length;
  if (numRows > 100 || numCols > 100) {
    console.error('Matrix size exceeds the maximum limit (100x100).');
    process.exit(1);
  }

  return matrix;
}

function findRegions(matrix) {
  const visited = new Set();
  let regions = 0;

  function exploreRegion(row, col) {
    if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length) {
      return;
    }

    if (matrix[row][col] === 1 && !visited.has(`${row}-${col}`)) {
      visited.add(`${row}-${col}`);
      exploreRegion(row - 1, col);
      exploreRegion(row + 1, col);
      exploreRegion(row, col - 1);
      exploreRegion(row, col + 1);
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 1 && !visited.has(`${i}-${j}`)) {
        regions++;
        exploreRegion(i, j);
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