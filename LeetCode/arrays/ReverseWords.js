function reverseWords(s) {
  let arr = s.trim().replace(/\s+/g, " ").split(" ");
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr.join(" ");
}

console.log(reverseWords("  hello world  "));
console.log(reverseWords("the sky is blue"));
console.log(reverseWords("a good   example"));
