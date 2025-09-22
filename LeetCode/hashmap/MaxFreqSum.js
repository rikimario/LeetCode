function maxFreqSum(s) {
  let freqs = {};
  let vow = 0;
  let con = 0;

  for (const c of s) {
    freqs[c] = (freqs[c] || 0) + 1;
  }

  for (let ch in freqs) {
    if ("aeoiu".includes(ch)) {
      vow = Math.max(vow, freqs[ch]);
    } else {
      con = Math.max(con, freqs[ch]);
    }
  }

  return vow + con;
}

console.log(maxFreqSum("successes"));
