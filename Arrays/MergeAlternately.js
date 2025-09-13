function mergeAlternately(word1, word2) {
  let res = [];

  for (let i = 0; i < word1.length && i < word2.length; i++) {
    res.push(word1[i], word2[i]);
  }

  if (word1.length < word2.length) {
    res.push(...word2.slice(word1.length));
  } else {
    res.push(...word1.slice(word2.length));
  }

  return res.join("");
}

console.log(mergeAlternately("abc", "pqr"));
console.log(mergeAlternately("ab", "pqrs"));
console.log(mergeAlternately("abcd", "pq"));
