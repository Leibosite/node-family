// 螺旋矩阵打印

// 输入:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// 输出: [1,2,3,4,8,12,11,10,9,5,6,7]

const spiralOrder = function(arr) {
    const result = []
    if(arr.length === 0) {
        return result
    }
    
    let left=0, right = arr[0].length-1, up=0, down=arr.length-1;
    let x=0, y=0;
    while(left <= right && up <= down){
        for(y=left; y<=right; y++) {
            result.push(arr[x][y])
        }
        y--;
        up++;

        for(x=up; x<=down; x++){
            result.push(arr[x][y])
        }
        x--;
        right--;

        for(y=right; y>=left && up<=down; y--) {
            
            result.push(arr[x][y])
        }
        y++;
        down--;

        for(x=down; x>=up && left<=right; x--) {
            result.push(arr[x][y])
        }
        x++;
        left++;
    }
    return result;
}

const arr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11,12, 13, 14, 15],
    [16,17, 18, 19, 20]
]
console.log(arr[0][0])
console.log(spiralOrder(arr))