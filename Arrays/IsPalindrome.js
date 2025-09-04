function isPalindrome(s) {
  s = s
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .split("");

  for (let i = 0; i < s.length; i++) {
    let wLeft = s[i];
    let wRight = s[s.length - 1 - i];

    if (wLeft != wRight) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
