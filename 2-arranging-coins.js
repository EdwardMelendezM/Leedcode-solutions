const arrangingCoins = (n) => {
  for (let i = 1; i <= n; i++) {
    n -= i;
    if (n < i + 1) {
      return i;
    }
  }
}

arrangingCoins(5) // 2