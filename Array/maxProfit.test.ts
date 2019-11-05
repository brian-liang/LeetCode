const maxProfits = require('./maxProfit.ts');

test('Leet Code Max Profit Cases', ()=>{
    expect(maxProfits([7,1,5,3,6,4])).toBe(7);
    expect(maxProfits([1,2,3,4,5])).toBe(4);
    expect(maxProfits(7,6,4,3,1)).toBe(0);
});