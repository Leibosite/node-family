/**
 * 三数之和
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
 * 使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 * 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
    满足要求的三元组集合为：
    [
    [-1, 0, 1],
    [-1, -1, 2]
    ]
 */

function threeSum(nums) {
    nums = nums.sort((a,b) => a-b);
    let res = [], len = nums.length;
    if(len < 3) return res;
    for(let i = 0; i < len-1; i++){
        const target = 0-nums[i]
        if(nums[i]>0) break;
        let l = i+1, r = len-1;
        
        if(i==0 || nums[i] !== nums[i-1]) {
            while(l<r) {
                if(nums[l]+nums[r] === target){
                    res.push([nums[i], nums[l], nums[r]]);
                    while(l<r && nums[l] == nums[l+1]) l++
                    while(l<r && nums[r] == nums[r-1]) r--
                    l++
                    r--
                } else if(nums[l] + nums[r]<target){
                    l++
                } else {
                    r--
                }
            }
        }
       
    }
    return res
}

var threeSum2 = function(nums) {
    nums = nums.sort((a, b) => a-b)
    console.log(nums)
    const res = [];
    
    const len = nums.length;
    if(len < 3) return res;
    for(let i=0;i<len-1; i++) {
        const target = 0 - nums[i];
        if(nums[i]>0) break;
        let l=i+1, r = len-1;
        if(i == 0 || nums[i] !== nums[i-1]) {
            while(l<r) {
                if(nums[l]+nums[r] === target){
                    res.push([nums[i], nums[l], nums[r]]);
                    while(l<r && nums[l] == nums[l+1]) l++
                    while(l<r && nums[r] == nums[r-1]) r--
                    l++
                    r--
                } else if(nums[l] + nums[r]<target){
                    l++
                } else {
                    r--
                }
            }
        }
    }
    return res;
};

const arr = [-1,0,1,2,-1,-4,-2,-3,3,0,4]
console.log(threeSum(arr))
console.log(threeSum2(arr))