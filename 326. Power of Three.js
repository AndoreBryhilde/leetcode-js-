/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    while(n>2){
        if(n%3) return false;
        n=parseInt(n/3);
    }
    return n==1;
};
