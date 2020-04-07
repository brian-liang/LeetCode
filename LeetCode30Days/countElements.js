/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    const incrementedArray = arr.map(el => el + 1);
    const originalSet = new Set(arr);

    const total = incrementedArray.reduce((accumulator, currentValue) => {
        if(originalSet.has(currentValue)){
            accumulator++;
        }
        return accumulator;
    }, 0);

    return total;
};

console.log(countElements([1,2,3])); //2
console.log(countElements([1,1,3,3,5,5,7,7])); //0
console.log(countElements([1,3,2,3,5,0])); //3
console.log(countElements([1,1,2,2])); //2