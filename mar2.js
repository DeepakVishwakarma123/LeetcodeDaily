/**
 * @param {number[][]} grid
 * @return {number}
 */
var minSwaps = function(grid) {
    //two dimensional array
    // do the loop and check whether the data is alreayd remain or not 
    //in those cases return output=0
    // this loop first runs on outer array;
    let PositionHolder=0
    let zeroCounterDiagonalUP=0
    for(let i=0;i<grid.length;i++)
    {
        let rowArray=grid[i]
        for(let digonalPositionHolder=PositionHolder;j<rowArray.length;digonalPositionHolder++)
        {
            if(i===grid.length-1)
            {
                break;
            }
            else{
                if(rowArray[digonalPositionHolder]===0)
                {

                }
            }
        }
    }
};