/**
 * 第300题：最长上升子序列
给定一个无序的整数数组，找到其中最长上升子序列的长度。
示例:

输入: [10,9,2,5,3,7,101,18]
输出: 4 
解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
 */

const lengthOfLIS = (arr) => {
    if(arr.length < 1) return 0;
    const { max } = Math
    const dp = new Array(arr.length);
    let res = 1;
    for( let i=0;i<arr.length;i++){
        dp[i]=1;
        for(let j = 0;j<i;j++){
            if(arr[j]<arr[i]){
                dp[i] = max(dp[j]+1, dp[i])
            }
        }
        res = max(dp[i], res)
    }
    return res;
}

