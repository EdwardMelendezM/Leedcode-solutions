const missingNumber = (arr) => {
  const n = arr.length;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return (n * (n + 1) / 2) - sum;
}

// Test 
console.log(missingNumber([3, 0, 1])); // 2