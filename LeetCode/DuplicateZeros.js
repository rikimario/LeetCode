function duplicateZeros(arr) {
  let pos = 0;
  while (pos < arr.length - 1) {
    if (arr[pos] === 0) {
      arr.splice(pos + 1, 0, 0);
      arr.pop();
      pos += 2;
    } else {
      pos++;
    }
  }
}

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
