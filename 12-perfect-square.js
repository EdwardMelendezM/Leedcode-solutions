const perfectSquare = (num) => {
  const dp = new Array(num + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  return dp[num];
}

//Test
console.log(perfectSquare(12)); //3
console.log(perfectSquare(13)); //2