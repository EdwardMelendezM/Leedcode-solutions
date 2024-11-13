const squareRoot = (num) => {
  if (num < 0) {
    return num
  }
  let left = 1, right = Math.floor(num / 2);
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midSquare = mid * mid;

    if (midSquare === num) {
      return mid;
    } else if (midSquare < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}