A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and cannot have leading zeros.
For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.
Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting dots into s. You are not allowed to reorder or remove any digits in s. You may return the valid IP addresses in any order.

Example 1:
Input: s = "25525511135"
Output: ["255.255.11.135","255.255.111.35"]

Example 2:
Input: s = "0000"
Output: ["0.0.0.0"]

Example 3:
Input: s = "101023"
Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
 
Constraints:
1 <= s.length <= 20
s consists of digits only.

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let ans=[];
    function track(str,ip){
        if(ip.length==3){
            if(ipcheck(str)){
              ip.push(str);ans.push(ip.join('.'));
            }
        }
        else if(ip.length==2){
            for(let i=1;i<4;i++){
                let address=[...ip];
                let temp=str.substring(0,i);
                if(ipcheck(temp)){
                   address.push(temp);
                   let r=str.substring(i,str.length);
                   if(r.length<4&&r.length>0){track(r,address);}}
            }
        }
        else if(ip.length==1){
            for(let i=1;i<4;i++){
                let address=[...ip];
                let temp=str.substring(0,i);
                if(ipcheck(temp)){
                   address.push(temp);
                   let r=str.substring(i,str.length);
                   if(r.length<7&&r.length>1){track(r,address);}}
            }
        }
        else if(ip.length==0){
            for(let i=1;i<4;i++){
                let address=[...ip];
                let temp=str.substring(0,i);
                if(ipcheck(temp)){
                   address.push(temp);
                   let r=str.substring(i,str.length);
                   if(r.length<10&&r.length>2){track(r,address);}
                }
            }
        }
    }
    if(s.length<13&&s.length>3){track(s,[]);}
    return ans;
};

function ipcheck(str){
  let num=parseInt(str);
  if(str=='0'){return true;}
  else if(num<256&&str[0]!='0'){return true;}
  return false;
}

//better way

var restoreIpAddresses = function(s) {
    return findChunks(s, 4);
};

let isValid = function(s) {
    if (s.length === 0) return false;
    let n = +s;
    if (n > 255) return false;
    if (s[0] === '0') {
        return (n === 0) && (s.length === 1);
    }
    return true;
}

let findChunks = function(str, depth) {
    if (str.length > depth * 3) return [];
    if (depth >= 2) {
        let res = [];
        for (let i = 1; i <= 3; i++) {
            let front = str.slice(0, i);
            if (!isValid(front)) break;

            let end = str.slice(i);
            for (let s of findChunks(end, depth - 1)) {
                res.push(front + '.' + s);
            }
        }
        return res;
    }
    return isValid(str) ? [str] : [];
}
