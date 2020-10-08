// Problem: Find the unique number

// Instruction:
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:



// Solution-1:
function findUniq(arr) {
  // do magic
  let uniqueNumber = [];
  let sortedArr = arr.sort((a, b) => a-b);
  
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] !== sortedArr[i+1] && sortedArr[i] !== sortedArr[i-1]) {
      uniqueNumber.push(sortedArr[i]);
    }
  }
  return uniqueNumber[0]
}


// Solution-2:
function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
}