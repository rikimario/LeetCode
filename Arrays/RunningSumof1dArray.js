function RunningSumOf1dArray(nums) {
  let result = 0;
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    result += nums[i];

    arr.push(result);
  }

  return arr;
}

console.log(RunningSumOf1dArray([1, 2, 3, 4]));
console.log(RunningSumOf1dArray([1, 1, 1, 1, 1]));
console.log(RunningSumOf1dArray([3, 1, 2, 10, 1]));
