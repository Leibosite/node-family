/**
 * 
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

 

示例：

给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
 * @param {*} nums 
 * @param {*} total 
 */


const threeSum = (nums, total) => {
    // 先排序 
    nums.sort((a, b) => a > b);
    console.log(nums)
    const res = [];
    const len = nums.length;
    if(len < 0) return res;
    for(let i = 0; i<len; i++) {
        if(nums[i] > 0) break;
        let target = total - nums[i];
        let l = i + 1, r = len - 1;
        if(nums[i] !== nums[i-1]){
            while(l<r) {
                if(nums[l] + nums[r] == target) {
                    res.push([nums[i], nums[l], nums[r]]);
                    l++;
                    r--;
                    while(l<r && nums[l] === nums[l-1]) l++;
                    while(l<r && nums[r] === nums[r+1]) r--;
                } else if(nums[l] + nums[r] > target) {
                    r--;
                } else {
                    l++;
                }
            }
        }
    }
    return res;
}
console.log(threeSum([-1, 0, 1, 2, -1,-1, 2, -4], 0))
