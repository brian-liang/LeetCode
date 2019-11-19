/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:
Input: 123
Output: 321

Example 2:
Input: -123
Output: -321

Example 3:
Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: 
[−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNegative = x<0;
    if(isNegative) {
        if(x < -8463847412){
            return 0;
        } else {
        x = -x;
        }
    } else {
        if(x > 7463847412){
            return 0;
        }
    }

    let revNumber = x % 10;
    x/=10;

    while(Math.floor(x/10) >0){
        revNumber = revNumber*10 + Math.floor(x%10);
        x /= 10;
    }

    revNumber = revNumber*10 + Math.floor(x%10);

    return isNegative ? -revNumber : revNumber; 
};


/******** Test Case *************/

console.log(reverse(123));      //returns 321
console.log(reverse(-123));      //returns -321
console.log(reverse(120));      //returns 21

//overflow case -2147483648 overflow for negative
console.log(reverse(-8463847412));      //returns -2147483648
console.log(reverse(-9463847412));      //returns 0

//overflow case 2147483647 overflow for positive
console.log(reverse(7463847412));       //returns 2147483647
console.log(reverse(8463847412));       //returns 0
