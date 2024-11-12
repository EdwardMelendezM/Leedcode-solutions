const happyNumbers = (num) => {
  const seenNumbers = new Set();
  while (num !== 1) {
    if (seenNumbers.has(num)) {
      return false;
    }
    seenNumbers.add(num);

    let numAux = num;
    let sum = 0;
    while (numAux > 0) {
      const digit = numAux % 10;
      sum += digit * digit;
      numAux = Math.floor(numAux / 10);
    }
    num = sum;
  }
  return true;
}

// Ejemplos de uso
console.log(happyNumbers(19)); // true, es un número feliz
console.log(happyNumbers(2));  // false, no es un número feliz