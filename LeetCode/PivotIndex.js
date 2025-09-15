function pivotIndex(nums) {
  let sumLeft = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    sum -= nums[i];
    if (sum === sumLeft) {
      return i;
    }

    sumLeft += nums[i];
  }

  return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([-1, -1, -1, -1, -1, 0]));
