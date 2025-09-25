function checkIfPangram(sentence) {
  let map = new Map();
  let abc = "abcdefghijklmnopqrstuvwxyz";

  for (const ch of sentence) {
    map.set(ch);
  }

  for (let i = 0; i < abc.length; i++) {
    if (!map.has(abc[i])) {
      return false;
    }
  }

  return true;
}

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
console.log(checkIfPangram("leetcode"));
