function recoverOrder(order, friends) {
  let set = new Set(friends);
  let result = [];

  for (let i = 0; i < order.length; i++) {
    let n = order[i];
    if (set.has(n)) {
      result.push(n);
    }
  }

  return result;
}

console.log(recoverOrder([3, 1, 2, 5, 4], [1, 3, 4]));
console.log(recoverOrder([1, 4, 5, 3, 2], [2, 5]));
