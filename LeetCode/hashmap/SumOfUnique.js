function sumOfUnique(nums) {
  let set = {};
  let sum = 0;

  for (const n of nums) {
    set[n] = (set[n] || 0) + 1;
  }

  for (const n of nums) {
    if (set[n] === 1) {
      sum += n;
    }
  }

  return sum;
}

console.log(sumOfUnique([1, 2, 3, 2]));
console.log(sumOfUnique([1, 1, 1, 1, 1]));
console.log(sumOfUnique([1, 2, 3, 4, 5]));
