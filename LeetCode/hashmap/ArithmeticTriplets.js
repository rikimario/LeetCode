function arithmeticTriplets(nums, diff) {
  let map = new Map();
  let count = 0;

  for (let n of nums) {
    let temp = n - diff;

    if (map.has(temp) && map.has(temp - diff)) {
      count++;
    }
    map.set(n);
  }

  return count;
}

console.log(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3));
console.log(arithmeticTriplets([4, 5, 6, 7, 8, 9], 2));
