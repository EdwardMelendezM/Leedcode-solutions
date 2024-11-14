const threeDivisors = (num) => {
  if (num < 4) {
    return false;
  }
  if (num === 4) {
    return true;
  }
  const max = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= max; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Test cases
console.log(threeDivisors(4)) // false
console.log(threeDivisors(9)) // true
console.log(threeDivisors(10)) // false