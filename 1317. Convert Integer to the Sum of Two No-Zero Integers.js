No-Zero integer is a positive integer that does not contain any 0 in its decimal representation.
Given an integer n, return a list of two integers [a, b] where:
a and b are No-Zero integers.
a + b = n
The test cases are generated so that there is at least one valid solution. If there are many valid solutions, you can return any of them.

Example 1:
Input: n = 2
Output: [1,1]
Explanation: Let a = 1 and b = 1.
Both a and b are no-zero integers, and a + b = 2 = n.

Example 2:
Input: n = 11
Output: [2,9]
Explanation: Let a = 2 and b = 9.
Both a and b are no-zero integers, and a + b = 9 = n.
Note that there are other valid answers as [8, 3] that can be accepted.
 
Constraints:
2 <= n <= 104

//javascript
var getNoZeroIntegers = function(n) {
    let left=1;
    while(left<n){
        if(left.toString().includes('0')){left++;continue;}
        if((n-left).toString().includes('0')){left++;continue;}
        return [left,n-left];
    }
}

//golang
func getNoZeroIntegers(n int) []int {
    i:=1;
    for check(i,n-i) {
        i++;
    }
    return []int{i,n-i};
}

func check(i int,num int) bool{
    for num!=0||i!=0 {
        if num!=0&&num%10==0 {
            return true;
        }
        if i!=0&&i%10==0 {
            return true;
        }
        num=num/10;
        i=i/10;
    }
    return false;
}
