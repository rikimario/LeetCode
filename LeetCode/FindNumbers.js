function findNumbers(nums) {
  let even = 0;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i].toString().split("");

    if (n.length % 2 === 0) {
      even++;
    }
  }

  return even;
}

console.log(findNumbers([12, 345, 2, 6, 7896]));
