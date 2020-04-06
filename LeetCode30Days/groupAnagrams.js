/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hash = {};
    strs.forEach(str => {
        let letters = str.split('').sort();
        hash[letters] ? hash[letters].push(str) : hash[letters] = [str];
    });

    const keys = Object.keys(hash);
    return keys.map(v => hash[v]);
};


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
/*
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
 */