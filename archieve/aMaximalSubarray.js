console.log(getMaxSubSum([-1, 2, 3, -9]) == 5);
console.log(getMaxSubSum([2, -1, 2, 3, -9]) == 6);
console.log(getMaxSubSum([-1, 2, 3, -9, 11]) == 11);
console.log(getMaxSubSum([-2, -1, 1, 2]) == 3);
console.log(getMaxSubSum([100, -9, 2, -3, 5]) == 100);
console.log(getMaxSubSum([1, 2, 3]) == 6);

/*
 * Find the contiguous subarray with maximum sum of items.
 * More on: https://javascript.info/array#a-maximal-subarray
 *
 * @param {array} numbers
 * @return {number} Maximum Sum of contiguous sub array.
 */
function getMaxSubSum(array) {
    let partialSum = 0;
    let maxSum = 0;
    
    for (let elem of array) {
        partialSum = partialSum + elem;
        
        // Once the highest sum assigned, nothing will change
        // except the highest meets "its higher" sum.
        maxSum = Math.max(maxSum, partialSum);
        
        if (partialSum < 0) {
            partialSum = 0;
        }
    }
    
    return maxSum;
}
