const perfectNumber = (num) => {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
}

//Test
console.log(perfectNumber(28)); //true
console.log(perfectNumber(12)); //false
console.log(perfectNumber(496)); //true