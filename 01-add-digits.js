const addDigits = (num) => {
  if (num === 0) return 0
  return num % 9 || 9
}

// Test cases
console.log(addDigits(9)) // 2

//Explanation why it works with 9
// 9 % 9 = 0
// 18 % 9 = 0
// 27 % 9 = 0
// 36 % 9 = 0
// 45 % 9 = 0
// 54 % 9 = 0
// 63 % 9 = 0
// 72 % 9 = 0
