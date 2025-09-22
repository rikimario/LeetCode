function numIdenticalPairs(nums) {
  const freqs = new Map();
  let result = 0;

  for (const num of nums) {
    freqs.set(num, (freqs.get(num) || 0) + 1);
  }

  for (let n of freqs.values()) {
    if (n > 1) {
      result += (n * (n - 1)) / 2;
    }
  }

  return result;
}

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
console.log(numIdenticalPairs([1, 1, 1, 1]));
