function uniqueMorseRepresentations(words) {
  let abc = "a".charCodeAt(0);
  let code = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  let mapCode = new Map();
  let wordSet = new Set();

  for (const morse of code) {
    mapCode.set(String.fromCharCode(abc++), morse);
  }

  for (const word of words) {
    let morseWord = "";
    for (const w of word) {
      morseWord += mapCode.get(w);
    }
    wordSet.add(morseWord);
  }

  return wordSet.size;
}

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
console.log(uniqueMorseRepresentations(["a"]));
