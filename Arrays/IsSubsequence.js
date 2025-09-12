function isSubsequence(s, t) {
  let i = 0;

  for (let j = 0; j < t.length && i < s.length; j++) {
    if (s[i] === t[j]) {
      i++;
    }
  }
  return i === s.length;
}

console.log(isSubsequence("aaaaaa", "bbaaaa"));
console.log(isSubsequence("acb", "ahbgdc"));
console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
