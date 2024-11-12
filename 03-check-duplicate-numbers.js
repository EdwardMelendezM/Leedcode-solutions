const checkDuplicateNumbers = (arr) => {
  const numbers = {};
  for (let i = 0; i < arr.length; i++) {
    if (numbers[arr[i]]) {
      return true;
    }
    numbers[arr[i]] = true;
  }
  return false;
}

// Test cases
console.log(checkDuplicateNumbers([1, 2, 3, 1])) // true