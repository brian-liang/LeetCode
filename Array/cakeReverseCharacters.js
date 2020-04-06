/*
Write a function that takes an array of characters and reverses the letters in place. ↴ 
*/


function reverse(arrayOfChars) {

    // Reverse the input array of characters in place
    let forwardPointer = 0;
    let backwardPointer = arrayOfChars.length - 1;
    let tempStorage;
    while(forwardPointer < backwardPointer){
        tempStorage = arrayOfChars[forwardPointer];
        arrayOfChars[forwardPointer] = arrayOfChars[backwardPointer];
        arrayOfChars[backwardPointer] = tempStorage;

        forwardPointer++;
        backwardPointer--;
    }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
 // Complexity 
 /*
  O(n) time and O(1) space
 */
  
  
  
  // Tests
  
  let desc = 'empty string';
  let input = ''.split('');
  reverse(input);
  let actual = input.join('');
  let expected = '';
  assertEqual(actual, expected, desc);
  
  desc = 'single character string';
  input = 'A'.split('');
  reverse(input);
  actual = input.join('');
  expected = 'A';
  assertEqual(actual, expected, desc);
  
  desc = 'longer string';
  input = 'ABCDE'.split('');
  reverse(input);
  actual = input.join('');
  expected = 'EDCBA';
  assertEqual(actual, expected, desc);
  
  function assertEqual(a, b, desc) {
    if (a === b) {
      console.log(`${desc} ... PASS`);
    } else {
      console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
  }