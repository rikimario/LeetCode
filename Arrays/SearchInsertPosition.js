function SearchInsertPosition(nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    let el = nums[i];

    if (el === target) {
      return nums.indexOf(el);
    } else if (i >= nums.length) {
      el = target;
      nums.push(target);
      nums.sort((a, b) => a - b);
      return nums.indexOf(el);
    }
  }
}

console.log(SearchInsertPosition([1, 3, 5, 6], 5));
console.log(SearchInsertPosition([1, 3, 5, 6], 7));
