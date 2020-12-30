/**
 * 
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

    注意：如果 s 中存在这样的子串，我们保证它是唯一的答案。
    示例 1：
    输入：s = "ADOBECODEBANC", t = "ABC"
    输出："BANC"
    示例 2：
    输入：s = "a", t = "a"
    输出："a"
    提示：
    1 <= s.length, t.length <= 105
    s 和 t 由英文字母组成

*/

const minWindow = (s, t) => {
    const sLen = s.length, tLen = t.length;
    let res = '', tMap = new Map(), windowMap = new Map();
    t.split('').forEach(e => {
        tMap.set(e, 0);
    });
    if(tLen > sLen || tLen == 0 || sLen == 0) return res;
    let left = 0, right = 0, start=0, volid=0, len = sLen;
    while(right < sLen){
        const cr = s[right]
        right++;
        if(tMap.has(cr)) {
            let count = 0;
            if(windowMap.has(cr)){
                count =  windowMap.get(cr) + 1;
            }
            windowMap.set(cr, count)
            if(windowMap.get(cr) == tMap.get(cr))  volid++;
        }
        while(volid == tMap.size){
            if(right - left < len){
                start = left;
                len = right - left;
            }
            if(tMap.has(s[left])){
                if(windowMap.get(s[left]) == tMap.get(s[left])){
                    volid --;
                }
                windowMap.set(s[left], windowMap.get(s[left]) - 1);
            }
            left ++;
        }
    }
    console.log(start, len);
    return len == Math.MAX_SAFE_INTEGER ? "" : s.substring(start, start + len)
}

console.log(minWindow('XXXXADOBECODEBANCAXBC', 'ABC'))
// console.log(minWindow('a', 'a'))