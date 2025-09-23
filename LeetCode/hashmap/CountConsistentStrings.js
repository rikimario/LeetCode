function countConsistentStrings(allowed, words) {
  let word = {};
  let set = new Set(allowed);
  let count = 0;

  for (let key of words) {
    word[key] = (word[key] || 0) + 1;
  }

  for (const w of words) {
    let valid = true;
    for (let ch of w) {
      if (!set.has(ch)) {
        valid = false;
        break;
      }
    }

    if (valid) {
      count++;
    }
  }

  return count;
}

console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));
