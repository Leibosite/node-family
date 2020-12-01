/**
 * 第3题：无重复字符的最长子串
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 */

const setSolution = function(s){
    const len = s.length;
    if(len == 0) return 0;
    const set = new Set();
    let i=0, j=0, result =0;
    while(i<len && j<len){
        if(!set.has(s[j])){
            set.add(s[j]);
            j++;
            result = Math.max(result, j-i)
        } else {
            set.delete(s[i]);
            i++;
        }
    }
    console.log(i,j)
    return result;
}

console.log(setSolution("abcabcbb"))

const mapSolution = function(s){
    const len = s.length;
    if(len === 0) return 0;
    const map = new Map();
    let i=0,j=0,result=0;
    while(j<len){
        if(map.has(s[j])){
            i = Math.max(map.get(s[j]), i);
        }
        result = Math.max(result, j-i+1);
        map.set(s[j], j+1);
        j++;
    }
    return result;
}
console.log(mapSolution("pwwkew"))
