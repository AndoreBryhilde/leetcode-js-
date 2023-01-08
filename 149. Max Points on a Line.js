Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, return the maximum number of points that lie on the same straight line.

Example 1:
Input: points = [[1,1],[2,2],[3,3]]
Output: 3

Example 2:
Input: points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
Output: 4
 
Constraints:
1 <= points.length <= 300
points[i].length == 2
-104 <= xi, yi <= 104
All the points are unique.

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let ans=0;let l=points.length;
    if(l<3)return l;
    for(let i=0;i<l-2;i++){
        let [x1,y1]=points[i];
        for(let j=i+1;j<l-1;j++){
            let cnt=2;let [x2,y2]=points[j];
            for(let k=j+1;k<l;k++){
                let [x3,y3]=points[k];
                if((x1*(y2-y3)+x2*(y3-y1)+x3*(y1-y2))==0){cnt+=1;}
            }
            ans=Math.max(ans,cnt);
        }
    }
    return ans;
};
