You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.
Return the single element that appears only once.
Your solution must run in O(log n) time and O(1) space.

Example 1:
Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2

Example 2:
Input: nums = [3,3,7,7,10,11,11]
Output: 10
 
Constraints:
1 <= nums.length <= 105
0 <= nums[i] <= 105

//javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let head=0;
    let tail=nums.length-1;
    while(head<tail) {
        let mid=~~((head+tail)/2);
        let isEven=(head-mid)%2===0;
        if(nums[mid-1]!==nums[mid]&&nums[mid]!= nums[mid+1]){
            return nums[mid];
        }
        if(nums[mid-1]===nums[mid]){
            if(isEven){tail=mid-2;}
            else{head=mid+1;}
        }else{
            if(isEven){head=mid+2;}
            else{tail=mid-1;}   
        }
    }
    return nums[head];
};

//golang
func singleNonDuplicate(nums []int) int {
    head:=0;
    tail:=len(nums)-1;
    for head<tail {
        mid:=(head+tail)>>1;
        isEven:= (head-mid)%2==0;
        if nums[mid-1]!=nums[mid]&&nums[mid]!=nums[mid+1] {
            return nums[mid];
        }
        if nums[mid-1]==nums[mid] {
            if isEven {
                tail=mid-2;
            }else{
                head=mid+1;
            }
        }else{
            if isEven {
                head=mid+2;
            } else {
                tail=mid-1;
            }
        }
    }

    return nums[head];
}
