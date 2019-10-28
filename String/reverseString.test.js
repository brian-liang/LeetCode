const reverseString = require('./reverseString.ts')

test('Reverses String', ()=>{
    expect(reverseString('hello')).toBe('olleh');
});
