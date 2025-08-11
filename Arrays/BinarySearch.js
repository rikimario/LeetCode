function BinarySearch(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const el = nums[i];

    if (el === target) {
      return i;
    } else {
      continue;
    }
  }
  return -1;
}

console.log(BinarySearch([-1, 0, 3, 5, 9, 12], 9));
console.log(BinarySearch([-1, 0, 3, 5, 9, 12], 2));
