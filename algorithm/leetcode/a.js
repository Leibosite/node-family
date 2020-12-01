/*
 * @return {number}
 */
var maxArea = function(height) {
    if(height.length == 0) return 0;
    const len = height.length;
    let maxV = (len-1)*Math.min(height[0], height[len-1]), left = 0, right = len-1;
    while(left<=right){
        if(height[left]<height[right]) {
            left ++;
        } else {
            right --;
        }
        let tmpV = (right - left) * Math.min(height[left], height[right])
        if(tmpV > Max) {
            maxV = tmpV;
        }
    }
    return maxV;
};
// 在线：liuruiqi02
// 盛水最多容器
// 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 示例:
// 输入：height = [4,3,2,1,4]
// 输出：16