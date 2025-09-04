function twoSum(numbers, target) {
  let map = new Map();

  for (let i = 0; i < numbers.length; i++) {
    if (map.has(target - numbers[i])) {
      return [map.get(target - numbers[i]) + 1, i + 1];
    }
    map.set(numbers[i], i);
  }
}

console.log(twoSum([2, 3, 4], 6));
