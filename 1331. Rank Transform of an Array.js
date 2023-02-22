Given an array of integers arr, replace each element with its rank.
The rank represents how large the element is. The rank has the following rules:
Rank is an integer starting from 1.
The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
Rank should be as small as possible.
 
Example 1:
Input: arr = [40,10,20,30]
Output: [4,1,2,3]
Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.

Example 2:
Input: arr = [100,100,100]
Output: [1,1,1]
Explanation: Same elements share the same rank.

Example 3:
Input: arr = [37,12,28,9,100,56,80,5,12]
Output: [5,3,4,2,8,6,7,1,3]
 
Constraints:
0 <= arr.length <= 105
-109 <= arr[i] <= 109

//javascript
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    var map=new Map();
    [...new Set(arr)].sort((a,b)=>a-b).map((x,i)=>map.set(x,i+1));
    return arr.map((e)=>map.get(e));
};

//go lang
func arrayRankTransform(arr []int) []int {
    ans := make([]int,len(arr));
    cop := make([]int,len(arr));
    m := make(map[int]int)
	counter := 1
    copy(cop,arr);
    sort.Ints(cop);
    for i := range cop {
		if i>=1&&cop[i]==cop[i-1] {
			counter--;
		}
		m[cop[i]]=counter;
		counter++;
	}

	for i:=range arr {
		ans[i] = m[arr[i]];
	}
    return ans;
}

//faster
 sorted := make([]int, len(arr));
  copy(sorted,arr);
  sort.Ints(sorted);
  rankMap := make(map[int]int);
  currRank := 1
  for _, v := range sorted {
    if _, ok := rankMap[v]; !ok {
      rankMap[v] = currRank
      currRank += 1
    }
  }
  for i, orig := range arr {
    sorted[i] = rankMap[orig]
  }
  return sorted
