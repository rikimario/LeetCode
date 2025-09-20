function findMaxAverage(nums, k) {
  let left = 0;
  let right = k - 1;
  let maxValue = -Infinity;

  while (left <= nums.length - k) {
    let value = nums.slice(left, left + k).reduce((a, b) => a + b, 0);

    maxValue = Math.max(maxValue, value);

    left++;
  }

  return maxValue / k;
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([5], 1));
