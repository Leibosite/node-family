/**
 * 旋转数组
 * 输入: [1,2,3,4,5,6,7] 和 k = 3
 * 输出: [5,6,7,1,2,3,4]
 */

function rotation (arr, k) {
    reverse(arr);
    const ba = arr.slice(0, k), ea = arr.slice(k);

    return reverse(arr.slice(0, k)).concat(reverse(arr.slice(k)))
}

function reverse(arr) {
    const len = arr.length;
    for(let i=0; i < len/2;i++) {
    let tmp = arr[i]
    arr[i] = arr[len-i-1]
    arr[len-i-1] = tmp;
    }
    return arr;
}
let arr = [1,2,3,4,5,6,7]
// reverse(arr)
console.log(rotation(arr, 3))
console.log(arr.slice(0,3))
console.log(arr.splice(0,3))
