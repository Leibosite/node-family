/**
 * 快速排序：
 * 通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据都比另外一部分的所有数据都要小，
 * 然后再按此方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，以此达到整个数据变成有序序列
 */


const arr = [6, 3, 8, 10, 22, 1, 9, 12, 5, 10]

var quickSort = function (arr, left, end) {
    if (left >= end) {//如果左边的索引大于等于右边的索引说明整理完毕
        return
    }
    let baseValue = arr[left];
    let i = left, j = end;
    while (i < j) {
        while (i < j && arr[j] >= baseValue) {
            j--;
        }
        arr[i] = arr[j];
        while (i < j && arr[i] <= baseValue) {
            i++;
        }
        arr[j] = arr[i];
    }
    arr[j] = baseValue

    quickSort(arr, left, j - 1)
    quickSort(arr, j+1, end)
    return arr
}

// console.log(quickSort(arr, 0, arr.length - 1));
// const arr = [6, 3, 8, 10, 22, 1, 9, 12, 5, 10]
const quickSort1 = (array) => {
    const sort = (arr, left = 0, right = arr.length - 1) => {
        if (left >= right) {//如果左边的索引大于等于右边的索引说明整理完毕
            return
        }
        let i = left
        let j = right
        const baseVal = arr[j] // 取无序数组最后一个数为基准值
        while (i < j) {//把所有比基准值小的数放在左边大的数放在右边
            while (i < j && arr[i] <= baseVal) { //找到一个比基准值大的数交换
                i++
            }
            arr[j] = arr[i] // 将较大的值放在右边如果没有比基准值大的数就是将自己赋值给自己（i 等于 j）
            while (j > i && arr[j] >= baseVal) { //找到一个比基准值小的数交换
                j--
            }
            arr[i] = arr[j] // 将较小的值放在左边如果没有找到比基准值小的数就是将自己赋值给自己（i 等于 j）
        }
        arr[j] = baseVal // 将基准值放至中央位置完成一次循环（这时候 j 等于 i ）
        sort(arr, left, j - 1) // 将左边的无序数组重复上面的操作
        sort(arr, j + 1, right) // 将右边的无序数组重复上面的操作
    }
    const newArr = array.concat() // 为了保证这个函数是纯函数拷贝一次数组
    sort(newArr)
    return newArr
}

const quickSort2 = function(arr) {
    const sort = (arr, left = 0, right = arr.length - 1) => {

        if (left>=right) {
            return;
        }
        let i = left, j = right;
        let baseVal = arr[right];
        while (i < j) {
            while(i<j && arr[i] <= baseVal) {
                i++;
            }
            arr[j] = arr[i];
            while(j>i && arr[j] >= baseVal) {
                j--;
            }
            arr[i] = arr[j];
        }
        arr[j] = baseVal;
        sort(arr, left, j - 1);
        sort(arr, j+1, right);
    }
    sort(arr)
    return arr;
}
console.log(quickSort2(arr))