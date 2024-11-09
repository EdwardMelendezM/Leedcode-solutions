const countPrimes = (n) => {
  if (n < 2) {
    return 0;
  }
  let primes = new Array(n).fill(true);
  primes[0] = primes[1] = false;
  for (let i = 2; i * i < n; i++) {
    if (primes[i]) {
      for (let j = i * i; j < n; j += i) {
        primes[j] = false;
      }
    }
  }
  return primes.filter((prime) => prime).length;
}

// Example 1
let n = 10;
console.log(countPrimes(n)); // Output: 4