function kthDistinct(arr, k) {
  let map = {};
  let result = [];

  for (const ch of arr) {
    map[ch] = (map[ch] || 0) + 1;
  }

  for (const key of arr) {
    if (map[key] === 1) {
      result.push(key);
    }
  }

  if (result.length < k) {
    return "";
  } else {
    return result[k - 1];
  }
}

console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2));
console.log(kthDistinct(["aaa", "aa", "a"], 1));
console.log(kthDistinct(["a", "b", "a"], 3));
