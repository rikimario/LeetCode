function minSubArrayLen(target, nums) {
  let left = 0;
  let temp = 0;
  let minLen = Number.MAX_SAFE_INTEGER;

  for (let right = 0; right < nums.length; right++) {
    temp += nums[right];

    while (temp >= target) {
      minLen = Math.min(minLen, right - left + 1);
      temp -= nums[left];
      left++;
    }
  }

  return minLen !== Number.MAX_SAFE_INTEGER ? minLen : 0;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
