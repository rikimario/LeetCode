function kidsWithCandies(candies, extraCandies) {
  let sortedCandies = [...candies].sort((a, b) => a - b);
  let greatest = sortedCandies.length - 1;

  let result = [];

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= sortedCandies[greatest]) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
