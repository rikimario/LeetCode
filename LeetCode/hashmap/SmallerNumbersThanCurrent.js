function smallerNumbersThanCurrent(nums) {
  let sort = [...nums].sort((a, b) => a - b);
  let map = new Map();

  for (let i = 0; i < sort.length; i++) {
    if (!map.has(sort[i])) {
      map.set(sort[i], i);
    }
  }

  let result = nums.map((num) => map.get(num));

  return result;
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
