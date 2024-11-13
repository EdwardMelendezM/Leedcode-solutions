const romanToInterger = (s) => {
  const romanMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  result = 0;
  for (let i = 0; i < s.length; i++) {
    if (romanMap[s[i]] < romanMap[s[i + 1]]) {
      result -= romanMap[s[i]];
    }
    else {
      result += romanMap[s[i]];
    }
  }
  return result;
}

//Test Cases
console.log(romanToInterger('III')); //3
console.log(romanToInterger('IV')); //4
console.log(romanToInterger('IX')); //9
console.log(romanToInterger('MCMXCIV')); //1994