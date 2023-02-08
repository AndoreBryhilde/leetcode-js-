Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day number of the year.

 

Example 1:

Input: date = "2019-01-09"
Output: 9
Explanation: Given date is the 9th day of the year in 2019.
Example 2:

Input: date = "2019-02-10"
Output: 41
 

Constraints:

date.length == 10
date[4] == date[7] == '-', and all other date[i]'s are digits
date represents a calendar date between Jan 1st, 1900 and Dec 31th, 2019.

/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    let arr=[31,28,31,30,31,30,31,31,30,31,30,31];
    let d=date.split('-');let ans=0;
    for(let i in arr){
        if(i==parseInt(d[1])-1){ans+=parseInt(d[2]);return ans;}
        if(i==1){
            if(parseInt(d[0])%4==0){
                if(parseInt(d[0])%100==0){
                    if(parseInt(d[0])%400==0){ans+=29;}else{ans+=28;}
                }else{ans+=29;}
            }else{ans+=28;}
        }else{ans+=arr[i];}   
    }
};
