/**
 * 冒泡排序
 */

const bubble = function(nums) {
    const len = nums.length;
    if(len === 0) return nums;
    for(let i = 0; i < len;i++) {
        for(let j = i+1; j < len; j++) {
            if(nums[i] >= nums[j]) {
                let tmp = nums[i];
                nums[i] = nums[j];
                nums[j] = tmp;
            }
        }
    }
    return nums
} 
console.log(bubble([-1, 0, 1, 2, -1, -4]))