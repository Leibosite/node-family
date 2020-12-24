/**
 * 

第387题：字符串中的第一个唯一字符
给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1 。
案例:

s = "leetcode"
返回 0.

s = "loveleetcode",
返回 2.  
注意事项： 您可以假定该字符串只包含小写字母。
 */
const firstChar = (str) =>{
    const a=new Array(26);
    for(let i = 0; i<str.length; i++){
        a[str[i].charCodeAt() - 97] = i;
    }
    for(let i = 0; i<str.length; i++){
        if(a[str[i].charCodeAt() - 97] == i){
            return i;
        }
    }
    return -1;
}

console.log(firstChar("loveleetcode"))
