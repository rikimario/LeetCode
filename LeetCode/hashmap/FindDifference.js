function findDifference(nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let list1 = [];
  let list2 = [];

  for (let n of set1) {
    if (!set2.has(n)) {
      list1.push(n);
    }
  }

  for (const n of set2) {
    if (!set1.has(n)) {
      list2.push(n);
    }
  }

  return [list1, list2];
}

console.log(findDifference([1, 2, 3], [2, 4, 6]));
