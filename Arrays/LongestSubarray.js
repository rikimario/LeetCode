function longestSubarray(nums) {
  let currCount = 0;
  let prevCount = 0;
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currCount++;
    } else {
      prevCount = currCount;
      currCount = 0;
    }

    res = Math.max(res, currCount + prevCount);
  }

  if (res === nums.length) {
    return res - 1;
  } else {
    return res;
  }
}

console.log(longestSubarray([1, 1, 0, 1]));
console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]));
console.log(longestSubarray([1, 1, 1]));
