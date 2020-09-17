// Given an integral number, determine if it's a square number

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

var isSquare = function(n){
   return Math.sqrt(n) % 1 === 0;
}