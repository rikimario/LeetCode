function maxVowels(s, k) {
  let vowels = "aeiou";
  let vowelCount = 0;

  for (let i = 0; i < k; i++) {
    if (vowels.indexOf(s.charAt(i)) != -1) vowelCount++;
  }

  let maxVowelsCount = vowelCount;

  for (let i = k; i < s.length; i++) {
    if (vowels.indexOf(s.charAt(i)) != -1) vowelCount++;
    if (vowels.indexOf(s.charAt(i - k)) != -1) vowelCount--;

    maxVowelsCount = Math.max(maxVowelsCount, vowelCount);

    if (maxVowelsCount == k) return k;
  }

  return maxVowelsCount;
}

console.log(maxVowels("zpuerktejfp", 3));
console.log(maxVowels("abciiidef", 3));
