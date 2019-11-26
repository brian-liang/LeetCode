/*
InterviewCake

 Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome. ↴

You can assume the input string only contains lowercase letters.

Examples:

    "civic" should return true
    "ivicc" should return true
    "civil" should return false
    "livci" should return false

*/

function hasPalindromePermutation(theString){

    var charSet = new Set();

    for (const char of theString){
        if (charSet.has(char)){
            charSet.delete(char);
        } 
        else{
            charSet.add(char);
        }
    }

    return charSet.size <= 1;
}

//


/*********TEST*******/
console.log(hasPalindromePermutation("civic"));     //returns true
console.log(hasPalindromePermutation("ivicc"));     //returns true
console.log(hasPalindromePermutation("civil"));     //return false
console.log(hasPalindromePermutation("livci"));     //returns false


/*********Complexity*****/
/*
O(n) time, since we're making one iteration through the nnn characters in the string.

Our unpairedCharacters set is the only thing taking up non-constant space. We could say our space cost is O(n)O(n)O(n) as well, since the set of unique characters is less than or equal to nnn. But we can also look at it this way: there are only so many different characters. How many? The ASCII character set has just 128 different characters (standard english letters and punctuation), while Unicode has 110,000 (supporting several languages and some icons/symbols). We might want to treat our number of possible characters in our character set as another variable kkk and say our space complexity is O(k)O(k)O(k). Or we might want to just treat it as a constant, and say our space complexity is O(1)O(1)O(1). 
*/