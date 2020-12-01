/**
 * 第120题：三角形最小路径和
给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
例如，给定三角形：

[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
则自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
 */

const miniNumTotal = arr => {
    const arrlen = arr.length;
    let f = new Array(arrlen).fill(0),  { min } = Math;
    for(let i = 0; i<arrlen; i++){
        f[i] = new Array(arrlen).fill(0)
    }
    f[0][0] = arr[0][0];
    for(let i =1;i<arrlen;i++){
        f[i][0] = f[i-1][0] + arr[i][0]
        for(let j = 1; j<i;j++){
            f[i][j] = min(f[i-1][j-1], f[i-1][j]) + arr[i][j]
        }
        f[i][i] = f[i-1][i-1] + arr[i][i]
    }
    let res = f[arrlen-1][0]
    for(let k=0;k<arrlen;k++){
        res = min(res, f[arrlen-1][k])
    }
    console.log(f)
    return res;
}

const arr = [
[2],
[3,4],
[6,5,7],
[4,1,8,3]
]
console.log(miniNumTotal(arr))
const miniNumTotal1 = (arr) => {
    if(arr.length < 1) return 0;

    const len = arr.length, {min} = Math;
    arr[1][0] += arr[0][0];
    arr[1][1] += arr[0][0];
    for(let i = 2; i<len; i++) {
        for(let j=0;j<arr[i].length;j++) {
            if(j===0) {
                arr[i][j] += arr[i-1][j]
            } else if(j===arr[i].length-1){
                arr[i][j] += arr[i-1][j-1]
            } else {
                arr[i][j] += min(arr[i-1][j-1], arr[i-1][j])
            }
        }
    }
    let res = arr[len-1][0]
    for(let k=0;k<arr[len-1].length;k++){
        res = min(res, arr[len-1][k])
    }
    console.log(arr)
    return res
}
console.log(miniNumTotal1(arr))