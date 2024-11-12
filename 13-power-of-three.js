const powerOfThree = (num) => {
  if (num === 0) return false;
  if (num < 0) return false;
  while (num % 3 === 0) {
    num = num / 3;
  }
  return num === 1;
}

//Test Cases
console.log(powerOfThree(27)); //true
console.log(powerOfThree(1)); //false