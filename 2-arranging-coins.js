const arrangingCoins = (n) => {
  // for (let i = 1; i <= n; i++) {
  //   n -= i;
  //   if (n < i + 1) {
  //     return i;
  //   }
  // }

  return Math.floor((-1 + Math.sqrt(1 + 8 * n) / 2))
}

console.log(arrangingCoins(8)) // 2