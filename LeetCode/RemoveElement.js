function RemoveElement(nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      [nums[i], nums[k]] = [nums[k], nums[i]];
      k++;
    }
  }

  return nums.slice(nums.lenght - 1, k);
}

console.log(RemoveElement([3, 2, 2, 3], 3));
console.log(RemoveElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
