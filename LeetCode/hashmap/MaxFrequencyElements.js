function maxFrequencyElements(nums) {
  const freqs = new Map();

  for (const num of nums) {
    freqs.set(num, (freqs.get(num) || 0) + 1);
  }

  let maxFrequency = 0;
  let totalElementsWithMaxFreq = 0;

  for (const freq of freqs.values()) {
    if (freq > maxFrequency) {
      maxFrequency = freq;
      totalElementsWithMaxFreq = freq;
    } else if (freq === maxFrequency) {
      totalElementsWithMaxFreq += freq;
    }
  }

  return totalElementsWithMaxFreq;
}

console.log(maxFrequencyElements([1, 2, 2, 3, 3, 3, 1, 4]));
