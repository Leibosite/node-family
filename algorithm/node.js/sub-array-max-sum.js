/**
 * 题目：输入一个整形数组，数组里有正数也有负数。
 * 数组中连续的一个或多个整数组成一个子数组，每个子数组都有一个和。
 * 求所有子数组的和的最大值。要求时间复杂度为O(n)
 * 输入数组为： [1, -2, 3, 10, -4, 7, 2, -5]，和最大子数组：[3, 10, -4, 7, 2] 和为18
 */

// const arr = [1, -2, 3, 10, -4, 7, 2, -5]
const arr = [-1,-2,-3,-4];

let subArraySum = function(arr) {
    let sum=0, start=0, end=0, tempStart=0, max=arr[0];

    for(let i = 0; i < arr.length; i++) {

        if(sum < 0) {
            sum = arr[i];
            tempStart = i;
        } else {
            sum += arr[i]
        }

        if(sum > max) {
            max = sum;
            start = tempStart;
            end = i;
        }
    
    }
    return {max, start, end};
}
let {max,start,end} = subArraySum(arr);
console.log(max, start, end)
console.log(subArraySum(arr))