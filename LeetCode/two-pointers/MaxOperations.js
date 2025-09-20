function maxOperations(nums, k) {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  let operations = 0;

  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum == k) {
      operations++;
      left++;
      right--;
    } else if (sum < k) {
      left++;
    } else {
      right--;
    }
  }

  return operations;
}

// console.log(maxOperations([1, 2, 3, 4], 5));
// console.log(maxOperations([3, 1, 3, 4, 3], 6));
console.log(maxOperations([2, 2, 2, 3, 1, 1, 4, 1], 4));
