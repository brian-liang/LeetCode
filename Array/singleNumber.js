// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:
// Input: [2,2,1]
// Output: 1

// Example 2:
// Input: [4,1,2,1,2]
// Output: 4

/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {
    var single;
    for (var i = 0; i < nums.length; i++) {
        single ^= nums[i];
    }
    return single;
};

// ^ XOR operator essentially switches the bit, so it will add nums[i] and if single already has nums[i] in there, it with switch the bit (remove it)
// in the end there will only be one remaining which we return. 


/************* Testing **********************/
console.log(singleNumber([2,2,1])); //returns 1
console.log(singleNumber([4,3,1,2,1,2,3])); //returns 4