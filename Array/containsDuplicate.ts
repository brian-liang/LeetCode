// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:
// Input: [1,2,3,1]
// Output: true

// Example 2:
// Input: [1,2,3,4]
// Output: false

// Example 3:
// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let chars = new Set();
  for(let i = 0; i < nums.length; i++){
    if (chars.has(nums[i])){
        return true;
    }
    chars.add(nums[i]);
  }
  return false;
};
/**
 * Keep track of seen characters with a Set data structure, fail when
 * a repeated character is found.
 *
 * Time: O(N)
 * Additional space: O(N)
 *
 */

//  var containsDuplicate = function(nums){
//     nums.sort();

//     for (var i = 1; i < nums.length; ++i) {
//       if (nums[i] === nums[i - 1]) {
//         return true;
//       }
//     }
//     return false;
//  }


 /**
 * Sort the original string first then iterate through it. Repeat characters
 * will show up next to eachother so fail if any two characters in a row
 * are the same.
 *
 * Time: O(N lg N)
 * Additional space: O(1)
 * 
 */


/**************Testing ***************/

console.log(containsDuplicate([1,2,3,1])); // true
console.log(containsDuplicate([1,2,3,4])); // false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); //true
console.log(containsDuplicate([1,2,3,4,5,5])); //true