/**
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
 *  L   C   I   R
    E T O E S I I G
    E   D   H   N
 * 行数为4时：
    L     D     R
    E   O E   I I
    E C   I H   N
    T     S     G   
 */


 const solution = function(str, n) {
     if(str.length < n) return str;
     const cycle = 2*n-2;
     const res = new Array(n).fill('');
     for(let i = 0; i<str.length; i++) {
        if(i%cycle < n) {
            res[i%cycle] += str[i]; 
        } else {
            res[cycle - i%cycle] += str[i]
        }
     }
     console.log(res.join(''))
     return res.join('')
 }
 let str = 'LEETCODEISHIRING'
 const res = ['LCIR','ETOESIIG','EDHN']
 console.log(solution(str, 3) === 'LCIRETOESIIGEDHN')
 console.log(solution(str, 4) === 'LDREOEIIECIHNTSG')