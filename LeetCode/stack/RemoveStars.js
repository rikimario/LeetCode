function removeStars(s) {
  let string = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "*") {
      string.pop();
    } else {
      string.push(s[i]);
    }
  }

  return string.join("");
}

console.log(removeStars("leet**cod*e"));
console.log(removeStars("erase*****"));
