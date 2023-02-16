Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.

Example 1:
Input: arr = [1,2,2,6,6,6,6,7,10]
Output: 6

Example 2:
Input: arr = [1,1]
Output: 1

Constraints:
1 <= arr.length <= 104
0 <= arr[i] <= 105

//js
/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
   let min=~~(arr.length/4);
   for(let i=0;i<arr.length-min;i++){
       if(arr[i]==arr[i+min]){return arr[i];}
   }
};

//go lang
func findSpecialInteger(arr []int) int {
    var min=len(arr)/4;
    for i:=0;i<len(arr)-min;i++ {
        if(arr[i]==arr[i+min]){
            return arr[i];
        }
    }
    return 0;
}
