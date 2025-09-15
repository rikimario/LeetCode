function uniqueOccurrences(arr) {
  let map = new Map();

  for (let n of arr) {
    map.set(n, (map.get(n) || 0) + 1);
  }

  let freqSet = new Set(map.values());
  return freqSet.size === map.size;
}

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
console.log(uniqueOccurrences([1, 2]));
console.log(uniqueOccurrences([3, 5, -2, -3, -6, -6]));
