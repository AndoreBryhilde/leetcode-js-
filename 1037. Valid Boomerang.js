Given an array points where points[i] = [xi, yi] represents a point on the X-Y plane, return true if these points are a boomerang.
A boomerang is a set of three points that are all distinct and not in a straight line.

Example 1:
Input: points = [[1,1],[2,3],[3,2]]
Output: true

Example 2:
Input: points = [[1,1],[2,2],[3,3]]
Output: false
 
Constraints:
points.length == 3
points[i].length == 2
0 <= xi, yi <= 100

/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    /*
      斜率是否相同
      (y3 - y1) / (x3 - x1) = (y2 - y1) / (x2 - x1)
    */
    return (points[2][1]-points[0][1])*(points[1][0]-points[0][0])!=(points[1][1]-points[0][1])*(points[2][0]-points[0][0]);
};
