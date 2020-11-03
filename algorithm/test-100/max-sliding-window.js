/**
 * 给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。
 * 你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。返回滑动窗口中的最大值。
 * 示例:

    输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
    输出: [3,3,5,5,6,7] 
    解释: 

    滑动窗口的位置                最大值
    ---------------               -----
    [1  3  -1] -3  5  3  6  7       3
    1 [3  -1  -3] 5  3  6  7       3
    1  3 [-1  -3  5] 3  6  7       5
    1  3  -1 [-3  5  3] 6  7       5
    1  3  -1  -3 [5  3  6] 7       6
    1  3  -1  -3  5 [3  6  7]      7
 */

const maxSlidingWindow = function(arr, k) {
   if(arr.length === 0) return arr;
   const res = []
   if(arr.length <= k) {
      let max = arr[0];
      for(let i = 1;i<arr.length;i++){
         if(max<arr[i]) max = arr[i]
      }
      res.push(max);
   } else {
      for(let i=0; i<arr.length-k+1;i++) {
         let max = arr[i];
         for(let j = i+1;j<i+k;j++){
            if(max<arr[j]) max = arr[j]
         }
         res.push(max)
      }
   }

   return res;
}
const arr = [1,3,-1,-3,5,3,6,7]
console.log(maxSlidingWindow(arr, 3))