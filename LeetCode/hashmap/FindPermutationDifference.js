function findPermutationDifference(s, t) {
  let first = new Map();
  let second = new Map();

  let count = 0;

  for (let i = 0; i < s.length; i++) {
    first.set(s[i], i);
  }

  for (let j = 0; j < t.length; j++) {
    second.set(t[j], j);
  }

  for (const key of first) {
    for (const key2 of second) {
      if (key[0] === key2[0]) {
        count += Math.abs(key[1] - key2[1]);
      }
    }
  }

  return count;
}

// Better solution
function findPermutationDifference2(s, t) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    const index = t.indexOf(s[i]);
    sum += Math.abs(i - index);
  }
  return sum;
}

console.log(findPermutationDifference("abc", "bac"));
console.log(findPermutationDifference("abcde", "edbac"));
