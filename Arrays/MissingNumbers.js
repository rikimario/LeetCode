function MissingNumbers(nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i <= nums.length; i++) {
    let n = nums[i];
    if (n !== i) {
      return i;
    }
  }
}

console.log(MissingNumbers([3, 0, 1]));
console.log(MissingNumbers([0, 1]));
console.log(MissingNumbers([9, 6, 4, 2, 3, 5, 7, 0, 1]));
