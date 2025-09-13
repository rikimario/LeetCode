function findMaxConsecutiveOnes(nums) {
  let maxLength = 0;
  let currLength = 0;
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    if (n === 1) {
      currLength++;
    } else {
      currLength = 0;
    }
    if (currLength > maxLength) {
      maxLength = currLength;
    }
  }

  return maxLength;
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
