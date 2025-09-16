function closeStrings(w1, w2) {
  if (w1.length !== w2.length) return false;
  let freq = (s) => {
    let map = new Map();
    for (let ch of s) map.set(ch, (map.get(ch) || 0) + 1);
    return map;
  };
  let f1 = freq(w1),
    f2 = freq(w2);
  // same letters check
  if ([...f1.keys()].sort().join() !== [...f2.keys()].sort().join())
    return false;
  let v1 = [...f1.values()].sort((a, b) => a - b);
  let v2 = [...f2.values()].sort((a, b) => a - b);
  return v1.join() === v2.join();
}

console.log(closeStrings("abc", "bca"));
console.log(closeStrings("a", "aa"));
console.log(closeStrings("cabbba", "abbccc"));
console.log(closeStrings("abbzzca", "babzzcz"));
