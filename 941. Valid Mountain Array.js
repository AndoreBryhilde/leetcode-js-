Given an array of integers arr, return true if and only if it is a valid mountain array.
Recall that arr is a mountain array if and only if:
arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i] 
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

Example 1:
Input: arr = [2,1]
Output: false

Example 2:
Input: arr = [3,5,5]
Output: false

Example 3:
Input: arr = [0,3,2,1]
Output: true

Constraints:
1 <= arr.length <= 104
0 <= arr[i] <= 104

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let peek=false;let bool=true;
    if(arr.length<=2){return false;}
    if(arr[0]>arr[1]){return false;}
    for(let i=1;i<arr.length;i++){
        if(arr[i]==arr[i-1]){return false;}
        if(arr[i]<arr[i-1]){peek=true;bool=false;}
        if(arr[i]>arr[i-1]&&peek){return false;}
        if(i==arr.length-1){
            if(bool){return false;}
        }
    }
    return true;
};

//berrer way
var validMountainArray = function(arr) {
  if (arr.length <= 2) return false;
  let climbing = true;
  for(let i = 0; i <= arr.length - 1; i += 1) {
    if (arr[i + 1] == arr[i]) return false;
    if (climbing) {
      if (arr[i + 1] < arr[i]) {
        if (i === 0) return false;
        climbing = false;
      }
    } else {
      if (arr[i + 1] > arr[i]) return false;
    }
  }
  return !climbing;
};
