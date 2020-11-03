/**
 * 删除排序数组中的重复项
 * 给定数组 nums = [1,1,2],
    函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。
    你不需要考虑数组中超出新长度后面的元素。

    给定 nums = [0,0,1,1,1,2,2,3,3,4],
    函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。
    你不需要考虑数组中超出新长度后面的元素。
 */

function removeDuplicates(nums) {
    if(nums.length === 0) return [];
    for(let i = 0; i<nums.length; ) {
        if(nums[i] == nums[i+1]) {
            nums.splice(i, 1);
        } else {
            i++
        }
    }
    return nums
}
const nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums))
