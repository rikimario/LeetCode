function compress(chars) {
  let first = 0;
  let second = 0;
  let length = 0;
  let arr = [];

  while (second <= chars.length) {
    if (chars[first] === chars[second]) {
      length++;
      second++;
    } else {
      if (chars[first] !== chars[second] && length === 1) {
        arr.push(chars[first]);
        second++;
        continue;
      }

      arr.push(chars[first], length.toString());
      length = 0;
      first = second;
    }
  }

  return arr;
}

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
console.log(compress(["a"]));
