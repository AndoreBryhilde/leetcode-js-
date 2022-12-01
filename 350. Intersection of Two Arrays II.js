var intersect = function(nums1, nums2) {
    let check,dir,l;
    if(nums1.length<nums2.length){
        check =nums1;
        dir=nums2;
        l=nums1.length;
       }else{
          check =nums2;
          dir=nums1;
          l=nums2.length; 
       }
    let ans=[];
    for(let i=0;i<l;i++){
        if(dir.indexOf(check[i]) >= 0){
            dir[dir.indexOf(check[i])] = null;
            ans.push(check[i]);
        }
    }
    return ans;
};
