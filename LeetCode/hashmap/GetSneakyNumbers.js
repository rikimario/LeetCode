function getSneakyNumbers(nums) {
  let numbers = {};
  let res = [];

  for (let n of nums) {
    numbers[n] = (numbers[n] || 0) + 1;
  }

  for (let n in numbers) {
    if (numbers[n] === 2) {
      res.push(Number(n));
    }
  }

  return res;
}

console.log(getSneakyNumbers([0, 1, 1, 0]));
console.log(getSneakyNumbers([0, 3, 2, 1, 3, 2]));
console.log(getSneakyNumbers([7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2]));
