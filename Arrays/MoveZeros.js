function MoveZeros(nums) {
  let n = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[n]] = [nums[n], nums[i]];
      n++;
    }
  }

  return nums;
}
console.log(MoveZeros([0, 1, 0, 3, 12]));
console.log(MoveZeros([0]));
