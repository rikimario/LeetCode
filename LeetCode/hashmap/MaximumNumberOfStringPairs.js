function maximumNumberOfStringPairs(words) {
  let set = new Set();
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      set.add(words[i]);
    } else {
      let temp = words[i].split("").reverse().join("");

      if (set.has(temp)) {
        count++;
        set.delete(temp);
      } else {
        set.add(words[i]);
      }
    }
  }

  return count;
}

console.log(maximumNumberOfStringPairs(["cd", "ac", "dc", "ca", "zz"]));
console.log(maximumNumberOfStringPairs(["ab", "ba", "cc"]));
console.log(maximumNumberOfStringPairs(["aa", "ab"]));
