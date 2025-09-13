function HeightChecker(heights) {
  let result = 0;
  let expected = [...heights].sort((a, b) => a - b);

  for (let i = 0; i < heights.length; i++) {
    const el = heights[i];
    let el2 = expected[0];

    if (el !== el2) {
      result++;
    }

    expected.shift();
  }

  return result;
}

console.log(HeightChecker([1, 1, 4, 2, 1, 3]));
console.log(HeightChecker([5, 1, 2, 3, 4]));
console.log(HeightChecker([1, 2, 3, 4, 5]));
