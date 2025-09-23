function numberOfPairs(nums1, nums2, k) {
  let count = 0;

  for (const key1 of firstMap) {
    for (const key2 of nums2) {
      if (key1 % (key2 * k) === 0) {
        count++;
      }
    }
  }

  return count;
}

console.log(numberOfPairs([1, 3, 4], [1, 3, 4], 1));
console.log(numberOfPairs([1, 2, 4, 12], [2, 4], 3));
console.log(numberOfPairs([1, 10, 11], [2, 2, 2], 5));
console.log(numberOfPairs([3, 9, 2, 3], [3, 4, 19, 1], 1));
