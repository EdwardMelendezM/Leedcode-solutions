const fibonacciNumber = (n) => {
  if (n === 0) return 0n;
  if (n === 1) return 1n;
  let first = 0n;
  let second = 1n;
  for (let i = 2; i <= n; i++) {
    const temp = first + second;
    first = second;
    second = temp;
  }
  return second;
}

//Test
console.log(fibonacciNumber(0)); // 0
console.log(fibonacciNumber(1)); // 1
console.log(fibonacciNumber(2)); // 1
console.log(fibonacciNumber(1000).toString());