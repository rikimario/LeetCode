function canBeTypedWords(text, brokenLetters) {
  let arr = text.split(" ");
  let set = new Set(brokenLetters);
  let ans = 0;

  for (let i = 0; i < arr.length; i++) {
    let canType = true;

    for (const ch of arr[i]) {
      if (set.has(ch)) {
        canType = false;
        break;
      }
    }

    if (canType) {
      ans++;
    }
  }

  return ans;
}

console.log(canBeTypedWords("hello world", "ad"));
console.log(canBeTypedWords("leet code", "lt"));
console.log(canBeTypedWords("leet code", "e"));
