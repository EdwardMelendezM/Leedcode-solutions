const greatestCommonDivisor = (arr) => {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  while (min !== 0) {
    let temp = min;
    min = max % min;
    max = temp;
  }
  return max;
}

// Test cases
console.log(greatestCommonDivisor([2, 4, 6, 8, 16])); // 2
console.log(greatestCommonDivisor([6, 10, 7, 9, 12])); // 1