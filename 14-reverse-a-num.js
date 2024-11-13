const reserverNumber = (num) => {
  let reserved = 0;
  let isNegative = num < 0;
  num = Math.abs(num);
  while (num > 0) {
    reserved = reserved * 10 + num % 10;
    num = Math.floor(num / 10)
  }
  return isNegative ? -reserved : reserved;
}


//Test Cases
console.log(reserverNumber(-123)); //321
console.log(reserverNumber(1)); //1