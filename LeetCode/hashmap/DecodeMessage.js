function decodeMessage(key, message) {
  let alphabet = "a".charCodeAt(0);
  let keyMap = new Map();
  let ans = "";

  for (let i = 0; i < key.length; i++) {
    if (key[i] === " " || keyMap.has(key[i])) continue;
    keyMap.set(key[i], String.fromCharCode(alphabet++));
  }

  for (const c of message) {
    ans += c === " " ? " " : keyMap.get(c);
  }

  return ans;
}

console.log(
  decodeMessage(
    "the quick brown fox jumps over the lazy dog",
    "vkbs bs t suepuv"
  )
);
