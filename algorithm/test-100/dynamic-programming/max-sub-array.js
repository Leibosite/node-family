/**
 * 最大子序和
 * 
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
示例:

输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 */

const maxSubArray = (arr) => {
    if(arr.length == 0) return 0;
    let sum = 0, max = 0, start = 0, end = 0, res = [], tmp=0;
    for(let i = 0; i<arr.length;i++){
        if(sum>=0) {
            sum += arr[i];
        } else {
            start = i;
            sum = arr[i];
        }
        if(max < sum ){
            max = sum;
            end = i;
        }
        sum = Math.max(arr[i], sum + arr[i]);
        max = Math.max(max, sum);
    }
    return {max, res, start, end}
}

const arr = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(arr))