const selfDivingNumbers = (left, right) => {
  const result = [];
  for (let i = left; i <= right; i++) {
    let num = i;
    while (num > 0) {
      if (num % 10 === 0 || i % (num % 10) !== 0) {
        break;
      }
      num = Math.floor(num / 10);
    }
    if (num === 0) {
      result.push(i);
    }
  }
  return result;
}

//Test Cases
console.log(selfDivingNumbers(1, 22)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]