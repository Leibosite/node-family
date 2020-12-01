/**
 * 题目：实现 strStr()
实现 strStr() 函数。给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回 -1。
*/

const strStr = function(source, target) {

    const tLen = target.length, sLen = source.length;
    let i = 0
    for(; i<sLen; i++){
        let tmpStr = source.substring(i, tLen);
        if(tmpStr == target) {
            return i;
        } else {
            const index = target.indexOf(source[tLen]);
            if (index >= 0) {
                i = i + tLen - index - 1;
            } else {
                continue;
            }
        }
    }
    if(i == sLen) return -1;
    return i;
}

console.log(strStr("hello, world", "llo"))