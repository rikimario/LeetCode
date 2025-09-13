function twoOutOfThree(nums1, nums2, nums3) {
  let result = [];

  for (let i = 0; i <= 100; i++) {
    if (nums1.includes(i) && nums2.includes(i) && nums3.includes(i)) {
      result.push(i);
    } else if (nums1.includes(i) && nums2.includes(i)) {
      result.push(i);
    } else if (nums1.includes(i) && nums3.includes(i)) {
      result.push(i);
    } else if (nums2.includes(i) && nums3.includes(i)) {
      result.push(i);
    }
  }

  return result;
}

console.log(twoOutOfThree([1, 1, 3, 2], [2, 3], [3]));
