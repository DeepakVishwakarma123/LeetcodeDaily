/**
 * @param {number[][]} mat
 * @return {number}
 */

// brute force approach
var numSpecial = function(mat) {
    let ZeroesinRow=[]
    let ZeroesinColumn=[]
    let specialPosition=[]
    let isOneisFoundinRow=false
    let isOneisFoundinColumn=false
    // intillize variable i with 0 value
    // a loop that goes and iterate to each array inside it
    for(let i=0;i<mat.length;i++)
    {   
        console.log("hello wold")
        let currentArray=mat[i]
        // run other loop inside it
        for(let j=0;j<currentArray.length;i++)
        {
        // pushing zeroes in one another array
        if(currentArray[j]===0)
        {
            ZeroesinRow.push(currentArray[j])
        }
        // scnarios if we found one do something here
        if(currentArray[j]===1)
        {
            isOneisFound=true
        }
        // checking row only in the end of current Iteration to avoid one's wrong checks
        if(isOneisFound===true && j===currentArray.length-1)
        {
            // we first check whether 
            // the thing are zeros in row or not o
            // ther we skip the iteration
            // we don,t do anything further operation
            if(ZeroesinRow.length===2)
            {
                //hold the row index value in another array 
                let rowIndexCurrent=i
 //i don,think to again repeat the loop for column
// rule is simple the j index count wil become the value for
//colulmn for all rows elment in that column
// running an simple loop again to chekc for column value
        for(let k=0;i<k.length;i++)
        {
            // look for current count
            // storing current Array
            // access the current variable
            let currentValue=mat[k][j]
            if(currentValue===0)
            {
                ZeroesinColumn.push(currentValue)
            }
            if(currentValue===1)
            {
                isOneisFoundinColumn=true
            }
            if(isOneisFoundinColumn===true && k===mat[k].length-1)
            {
                if(ZeroesinColumn.length==2)
                {
                    specialPosition.push([rowIndexCurrent,j])
                    break;
                }
            }
        }
}
            // if doesn,t match come outside directly
            else{
                break;
            }

        }
        }
    }
    return specialPosition.length;
};



let output=numSpecial([[1,0,0],[0,0,1],[1,0,0]])
console.log(output);
