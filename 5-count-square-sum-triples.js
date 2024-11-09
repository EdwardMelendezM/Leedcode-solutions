const countSquareSumTriples = (n) => {
  let count = 0;

  for (let c = 1; c <= n; c++) {
    const cSquared = c * c;

    for (let a = 1; a < c; a++) {
      const bSquared = cSquared - a * a;
      const b = Math.sqrt(bSquared);

      // Verificamos si b es un número entero y está en el rango
      if (b === Math.floor(b) && b >= 1 && b < c) {
        count++;
      }
    }
  }

  return count;
};

// Test case
console.log(countSquareSumTriples(5)); // Output: 2
