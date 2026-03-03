/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */

let stringNth="0"

let i=1
var findKthBit = function(n, k) {
   let KthBit=recursive(n,k,stringNth)
   return KthBit
}

function recursive(n,k,nthString)
{
  // intial empty variable simple bhasha main 
if(i<n)
 {   

     //do some operation on nth string
     let invertedNthString=nthString.split("").map(
        (binaryLetter) => {        
            if(binaryLetter==1)
            {
              return  binaryLetter=0
            }
            if(binaryLetter==0){
              return binaryLetter=1
            }
        }
     )
     let reverseString=invertedNthString.reverse().join("")
     let stringNthAgain=(nthString)+"1"+reverseString
     i+=1
     let KthBit=recursive(n,k,stringNthAgain)
     return KthBit
    }
 else{
    let KthBit=nthString.charAt(k-1)
    return KthBit
 }
}

let finalAnswer=findKthBit(4,11)
console.log(finalAnswer);


