// Exes and Ohs

// Instruction 
	// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples
	// XO("ooxx") => true
	// XO("xooxx") => false
	// XO("ooxXm") => true
	// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
	// XO("zzoo") => false

// Sample Test Cases
	//Test.assertEquals(XO('xo'),true);
	// Test.assertEquals(XO("xxOo"),true);
	// Test.assertEquals(XO("xxxm"),false);
	// Test.assertEquals(XO("Oo"),false);
	// Test.assertEquals(XO("ooom"),false);


// Solution 1:
function XO(str) {
   same = str.toLowerCase()
    var x = 0
    var o = 0
    for (var i=0; i<same.length; i++){
      if(same[i] === 'x'){
        x ++
      } else if(same[i] === 'o'){
        o ++
      } 
    }
    return x === o
}


// Solution 2:
const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}