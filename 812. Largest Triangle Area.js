Given an array of points on the X-Y plane points where points[i] = [xi, yi], return the area of the largest triangle that can be formed by any three different points. Answers within 10-5 of the actual answer will be accepted.

Example 1:
Input: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
Output: 2.00000
Explanation: The five points are shown in the above figure. The red triangle is the largest.

Example 2:
Input: points = [[1,0],[0,0],[0,1]]
Output: 0.50000

Constraints:
3 <= points.length <= 50
-50 <= xi, yi <= 50
All the given points are unique.

//it's a pure math question,don't waste your time

/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    const l = points.length;
    let ans = 0;
    function cal(A,B,C){
        let [x1,y1]=A;let [x2,y2]=B;let [x3,y3]=C;
        return Math.abs((x1*(y2-y3)+x2*(y3-y1)+x3*(y1-y2))/2);
    }
    for (let i=0;i<l-2;i++) {
        for (let j=i+1;j<l-1;j++) {
            for (k=j+1;k<l;k++) {
                ans = Math.max(ans,cal(points[i],points[j],points[k]));
            }
        }
    }
    return ans;
};
