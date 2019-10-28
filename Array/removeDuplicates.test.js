const removeDuplicates = require('./removeDuplicates.js');

test('Removes Duplicates from the Array', ()=>{
    expect(removeDuplicates([1,2,2,4])).toBe(3);
    expect(removeDuplicates([0,0,1,1,1,2,2,3,3,4])).toBe(5);
    expect(removeDuplicates(5,5)).toBe(1);
});

