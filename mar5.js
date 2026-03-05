/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let bothWayAnswer=[]
    let stringArray=s.split("")
    let previousValue=[]
    let outputCount=0
    for(let i=0;i<stringArray.length;i++)
    {   
        
        if(i===0)
        {
            previousValue.push(stringArray[i])
            continue
        }
        if(previousValue[0]!=stringArray[i])
        {   
            previousValue.pop()
            previousValue.push(stringArray[i])
            continue;
        }
        else{
            console.log("value current insdie string ara",stringArray[i]);
            
            stringArray[i]=="0"?stringArray[i]="1":stringArray[i]="0"
            outputCount++
            previousValue.pop()       
            console.log("value whic gone pushed",stringArray[i]);
                     
            previousValue.push(stringArray[i])
        }

    }
    console.log("string array",stringArray)
    return outputCount
};

let outputCount=minOperations("10010100")
console.log(outputCount);

// 3,3,2,2,4,4

//3,3,5,5,6