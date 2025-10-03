function reversePrefix(word, ch) {
  let left = word.indexOf(ch);
  let right = word.indexOf(ch) + 1;
  let result = "";

  while (right <= word.length) {
    if (left >= 0) {
      result += word[left--];
    } else if (!word[right]) {
      return result;
    } else {
      result += word[right++];
    }
  }
  return result;
}
console.log(reversePrefix("abcdefd", "d"));
