function asteroidCollision(asteroids) {
  let result = [];

  for (let i = 0; i < asteroids.length; i++) {
    let curr = asteroids[i];
    let last = result[result.length - 1];

    if (last > 0 && curr < 0) {
      if (last + curr === 0) {
        result.pop();
      } else if (Math.abs(last) < Math.abs(curr)) {
        result.pop();
        i--;
      }
    } else result.push(curr);
  }

  return result;
}

console.log(asteroidCollision([5, 10, -5]));
console.log(asteroidCollision([8, -8]));
console.log(asteroidCollision([10, 2, -5]));
console.log(asteroidCollision([-2, -1, 1, 2]));
