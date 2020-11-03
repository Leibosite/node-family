// 求最大子序列和，及最大组序列。

const maxSubArray = function(nums) {

    let pre = 0, maxSum = nums[0], begin=0, l=0,r=0;
    nums.forEach((x, i) => {
        
        if(pre >= 0 ) {
            pre += x;
        } else {
            begin = i;
            pre = x;
        }

        if(maxSum < pre) {
            l = begin;
            r = i;
            maxSum = pre;
        }
        // pre = Math.max(pre + x, x);
        // maxSum = Math.max(maxSum, pre);
    })
    console.log(begin);
    console.log(l, r);
    console.log(nums.slice(3,6+1));
    return maxSum;
}

const arr = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(arr))