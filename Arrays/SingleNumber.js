function SingleNumber(nums) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    index ^= nums[i];
  }
  return index;
}

console.log(SingleNumber([2, 2, 1]));
