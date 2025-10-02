function countPairs(nums, target) {
  let left = 0;
  let right = 1;
  let ans = 0;

  for (i = left; i < nums.length; i++) {
    for (let j = right; j < nums.length; j++) {
      let tempSum = nums[left] + nums[right];

      if (tempSum < target) {
        ans++;
      }
      right++;
    }
    left++;
    right = left + 1;
  }

  return ans;
}

console.log(countPairs([-1, 1, 2, 3, 1], 2));
console.log(countPairs([-6, 2, 5, -2, -7, -1, 3], -2));
