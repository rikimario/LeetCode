function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    let leftHeight = height[left];
    let rightHeight = height[right];
    let area = Math.min(leftHeight, rightHeight) * (right - left);

    maxArea = Math.max(maxArea, area);

    if (leftHeight < rightHeight) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
