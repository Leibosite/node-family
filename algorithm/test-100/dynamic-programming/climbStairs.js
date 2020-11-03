/**
 * 爬楼梯
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？ **注意：**给定 n 是一个正整数。
示例 1：

输入： 2   输出： 2  解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
示例 2：

输入： 3   输出： 3  解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
 */

const climbStairs = function(n) {
    if(n == 1) return 1;
    if(n == 2) return 2;
    let res = 0;
    if(n>2) {
        res = climbStairs(n-1) + climbStairs(n-2)
    }
    return res;
}

console.log(climbStairs(6))

const climbStairs2 = function(n) {
    if(n == 1) return 1;
    if(n == 2) return 2;
    let nA = new Array(n+1).fill(0);
    nA[1] = 1, nA[2] = 2;
    for(let i = 3; i<=n; i++) {
        nA[i] = nA[i-1] + nA[i-2];
    }
    console.log(nA)
    return nA[n];
}
console.log(climbStairs2(6))