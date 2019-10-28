var removeDuplicates = function (nums) {
    var head = 0;
    for (let i =1; i <nums.length; i++){
        if(nums[i] != nums[head]){
            head++;
            nums[head]=nums[i];
        }
    }
    return head +1;
};

module.exports = removeDuplicates;