function reverseVowels(s) {
  let arr = s.split("");
  let left = 0;
  let right = arr.length - 1;

  let isVowel = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  while (left < right) {
    while (left < right && !isVowel.has(arr[left])) {
      left++;
    }
    while (left < right && !isVowel.has(arr[right])) {
      right--;
    }

    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr.join("");
}

console.log(reverseVowels("IceCreAm"));
