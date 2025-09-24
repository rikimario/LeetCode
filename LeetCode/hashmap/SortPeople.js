function sortPeople(names, heights) {
  let map = new Map();
  let result = [];

  for (let i = 0; i < names.length; i++) {
    map.set(heights[i], names[i]);
  }

  heights.sort((a, b) => b - a);

  for (let h of heights) {
    result.push(map.get(h));
  }

  return result;
}

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
console.log(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150]));
