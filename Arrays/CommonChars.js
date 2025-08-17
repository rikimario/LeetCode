function commonChars(words) {
  let result = [];

  for (const el of words[0]) {
    if (words.every((word) => word.includes(el))) {
      result.push(el);
      words = words.map((word) => word.replace(el, ""));
    }
  }
  return result;
}

console.log(commonChars(["bella", "label", "roller"]));
