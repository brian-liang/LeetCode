var moveZeros = function (nums) {

    let iterations = nums.length;
    for (let i = 0; i < iterations; i++){
        if(nums[i] === 0){
            const temp = nums.splice(i,1);
            nums.push(temp[0]);
            iterations--;
            i--;
        }
    }
    return nums;
};

console.log(moveZeros([0,1,0,0,2,3]));