function numJewelsInStones(jewels, stones) {
  let stone = {};
  let count = 0;

  for (let s of stones) {
    stone[s] = (stone[s] || 0) + 1;
  }

  for (let s in stone) {
    if (jewels.includes(s)) {
      count += stone[s];
    }
  }
  return count;
}

console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZ"));
