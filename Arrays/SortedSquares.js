function sortedSquares(nums) {
  let newArr = [];

  for (let i = 0; i < nums.length; i++) {
    let n = Math.abs(nums[i]);

    newArr.push(n * n);
  }

  return newArr.sort((a, b) => a - b);
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));
