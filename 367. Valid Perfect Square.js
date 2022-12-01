var isPerfectSquare = function(num) {
    if(num==0||num==1||num==4)return true;
    let max = num>>1;
    let min = 0;
    while(max>min){
        let mid = (max+min)>>1;
        if((mid*mid)<num){
            min=mid+1;
        }else if((mid*mid)>num){
            max=mid;
        }else{
            return true;
        }
    }
    return false;
};
