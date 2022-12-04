A binary watch has 4 LEDs on the top to represent the hours (0-11), 
and 6 LEDs on the bottom to represent the minutes (0-59). 
Each LED represents a zero or one, with the least significant bit on the right.

Given an integer turnedOn which represents the number of LEDs that are currently on (ignoring the PM), 
  return all possible times the watch could represent. You may return the answer in any order.

The hour must not contain a leading zero.
For example, "01:00" is not valid. It should be "1:00".
The minute must be consist of two digits and may contain a leading zero.
For example, "10:2" is not valid. It should be "10:02".
 
Example 1:
Input: turnedOn = 1
Output: ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]

Example 2:
Input: turnedOn = 9
Output: []

Constraints:
0 <= turnedOn <= 10

/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    let ans=[];
    let c={0:[['0','0']],1:[['0','1'],['1','0']],2:[['0','2'],['1','1'],['2','0']],
           3:[['0','3'],['1','2'],['2','1'],['3','0']],
           4:[['0','4'],['1','3'],['2','2'],['3','1']],
           5:[['0','5'],['1','4'],['2','3'],['3','2']],
           6:[['1','5'],['2','4'],['3','3']],7:[['2','5'],['3','4']],8:[['3','5']]}
    let h={'0':['0'],'1':['1','2','4','8'],'2':['3','5','6','9','10'],'3':['7','11']};
    let m={'0':['00'],'1':['01','02','04','08','16','32'],           
           '2':['03','05','06','09','10','12','17','18','20','24','33','34','36','40','48'],
           '3':['07','11','13','14','19','21','22','25','26','28','35','37','38','41','42','44','49','50','52','56'],'4':['15','23','27','29','30','39','43','45','46','51','53','54','57','58'],
           '5':['31','47','55','59']}
    if(turnedOn>8)return [];
    c[turnedOn].forEach((e)=>{
        h[e[0]].forEach((he)=>{
            m[e[1]].forEach((me)=>{
                ans.push(`${he}:${me}`);
            })
        })
    })
    return ans;
};
