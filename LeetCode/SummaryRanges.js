function summaryRanges(nums) {
  let result = [];
  if (nums.length === 0) return result;
  let start = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] > 1) {
      if (start === nums[i - 1]) {
        result.push(start.toString());
      } else {
        result.push(start + "->" + nums[i - 1]);
      }
      start = nums[i];
    }
  }
  if (start === nums[nums.length - 1]) {
    result.push(start.toString());
  } else {
    result.push(start + "->" + nums[nums.length - 1]);
  }
  return result;
}

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
