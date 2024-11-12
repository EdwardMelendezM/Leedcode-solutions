const palindromeNumber = (num) => {
  if (num < 0) {
    return false;
  }
  let reversed = 0;
  let numAux = num;
  while (numAux > 0) {
    const digit = numAux % 10;
    reversed = reversed * 10 + digit;
    numAux = Math.floor(numAux / 10);
  }
  return num === reversed;
}

// Test
console.log(palindromeNumber(12321)); // true