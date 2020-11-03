/**
 * 加一
 * 
 */

const add1 = function (nums) {

    let flag = 1, len = nums.length, res=[];
    for(let i = len-1; i>=0;i--) {
        let v = nums[i] + flag;
        if(v == 10) {
            flag = 1;
            nums[i] = v%10;
        } else {
            nums[i] += flag;
            flag = 0;
        }
        console.log(nums[i])
    }
    if(flag == 1) {
        res.push(1)
        res = res.concat(nums)
    } else {
        res = nums
    }
    return res;
}
console.log(add1([1,9,9]))
console.log(add1([9,9]))
console.log(add1([1,2,3]))

 