You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

Example 1:
Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true

Example 2:
Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false
 
Constraints:
2 <= coordinates.length <= 1000
coordinates[i].length == 2
-10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
coordinates contains no duplicate point.

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(c){
    let y=c[1][1]-c[0][1];let x=c[1][0]-c[0][0];
    if(x){
        let s=y/x;
        for(let i=2;i<c.length;i++){
            if(((c[i][1]-c[0][1])/(c[i][0]-c[0][0]))!=s){return false;}
        }
    }else{
        for(let i=2;i<c.length;i++){
            if(c[i][0]!=c[0][0]){return false;}
        }
    }
    return true;
};
//更快的檢測方式
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
	var checkStraightLine = function(coordinates) {
		let dx = coordinates[1][0] - coordinates[0][0];
		let dy = coordinates[1][1] - coordinates[0][1];
		let ds = coordinates[0][0] * coordinates[1][1] - coordinates[1][0] * coordinates[0][1];

		for (let i = 2; i < coordinates.length; i++) {
			if ((coordinates[i][0] * dy - coordinates[i][1] * dx) !== ds) return false
		}
  return true

	};
