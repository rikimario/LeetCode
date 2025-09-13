function longestOnes(nums, k) {
  let left = 0;
  let maxLen = 0;
  let count = 0;
  let right = left;

  while (right < nums.length) {
    if (nums[right] === 0) {
      count++;
    }

    while (count > k) {
      if (nums[left] === 0) {
        count--;
      }
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);

    right++;
  }

  return maxLen;
}

console.log(
  longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
);
