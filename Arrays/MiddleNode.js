function middleNode(head) {
  let middleNode = Math.floor(head.length / 2);

  return head.slice(middleNode);
}

console.log(middleNode([1, 2, 3, 4, 5]));
