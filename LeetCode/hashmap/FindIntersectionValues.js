function findIntersectionValues(nums1, nums2) {
  let firstMap = new Map();
  let secondMap = new Map();
  let count1 = 0;
  let count2 = 0;
  let result = [];

  for (let i = 0; i < nums1.length; i++) {
    firstMap.set(nums1[i], i);
  }

  for (let i = 0; i < nums2.length; i++) {
    secondMap.set(nums2[i], i);
  }

  for (let i = 0; i < nums1.length; i++) {
    if (secondMap.has(nums1[i])) {
      count1++;
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (firstMap.has(nums2[i])) {
      count2++;
    }
  }

  result.push(count1, count2);
  return result;
}

console.log(findIntersectionValues([2, 3, 2], [1, 2]));
console.log(findIntersectionValues([4, 3, 2, 3, 1], [2, 2, 5, 2, 3, 6]));
console.log(findIntersectionValues([3, 4, 2, 3], [1, 5]));
