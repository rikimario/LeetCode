function equalPairs(grid) {
  let rows = new Map();
  let count = 0;

  for (let row of grid) {
    let rowKey = JSON.stringify(row);
    rows.set(rowKey, (rows.get(rowKey) || 0) + 1);
  }

  for (let i = 0; i < grid[0].length; i++) {
    let col = [];
    for (let j = 0; j < grid.length; j++) {
      col.push(grid[j][i]);
    }

    let colKey = JSON.stringify(col);
    if (rows.has(colKey)) {
      count += rows.get(colKey);
    }
  }

  return count;
}

console.log(
  equalPairs([
    [3, 2, 1],
    [1, 7, 6],
    [2, 7, 7],
  ])
);
