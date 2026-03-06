/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
    let isHasZeroSeen=false
    let isContinuous=true
    for(let i=0;i<s.length;i++)
    {
          if(s[i]==="1" && isHasZeroSeen===false)
          {
            continue;
          }
          if(s[i]==="0")
          {
            isHasZeroSeen=true
            continue;
          }
          if(s[i]==="1" && isHasZeroSeen===true)
          {
            isContinuous=false
            break;
          }
    }
    return isContinuous
};


let yes=checkOnesSegment("1001")
console.log(yes);
