/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

let rotate = function(nums, k) {
    nums.unshift(...nums.splice(nums.length-k));
};


/********** Testing ********************/
/*
Example 1
Input: [1,2,3,4,5,6,7] and k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
*/

let arr1 = [1,2,3,4,5,6,7];
rotate(arr1,3);
console.log(arr1);

/*
Example 2
Input: [-1,-100,3,99] and k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
*/

let arr2 = [-1,-100,3,99];
rotate(arr2,3);
console.log(arr2);