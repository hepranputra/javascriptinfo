// All below should be true if the function is correct.
console.log(getMaxSubSum([-1, 2, 3, -9]) == 5);
console.log(getMaxSubSum([2, -1, 2, 3, -9]) == 6);
console.log(getMaxSubSum([-1, 2, 3, -9, 11]) == 11);
console.log(getMaxSubSum([-2, -1, 1, 2]) == 3);
console.log(getMaxSubSum([100, -9, 2, -3, 5]) == 100);
console.log(getMaxSubSum([1, 2, 3]) == 6);


// Source:
// https://javascript.info/array#a-maximal-subarray
function getMaxSubSum(array) {
    let partialSum = 0;
    let maxSum = 0;
    
    for (let elem of array) {
        partialSum += elem;
        maxSum = Math.max(maxSum, partialSum);
        
        if (partialSum < 0) {
            partialSum = 0;
        }
    }
    
    return maxSum;
}


/*
 * Sum numbers and stop that program when ESC, CANCEL, ENTER without number
 * or negative number is entered.
 *
 * @return {number} The sum
 */
function sumInput() {
    let numbers = [];
    while (true) {
        let n = prompt("Enter a number:");
        
        if (!isFinite(n) || n === "" || n === null || n < 0) {
            console.log("--> Stop program <--")
            break;
        }
        
        numbers.push(+n);
        
        // console.log(numbers);
    }
    
    let sum = 0;
    for (let n of numbers) {
        sum += n;
    }
    return sum;
}

/*
 * Extracts number from money amount text.
 *
 * @param {string} str Amount of money with its currency sign.
 * @return {number} Amount of money without its currency sign.
 */
function extractCurrencyValue(str) {
    return +str.slice(1);
}

/*
 * Returns a string with ... ending if only string exceeds
 * maximum length.
 *
 * @param {string} str The string to be checked.
 * @param {number} maxLength Maximum length.
 * @return {string} final string
 */
function truncate(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength - 1) + "…";
    }
    return str;
}

function checkSpam(target) {
    let copyTarget = target.toLowerCase();
    return copyTarget.includes("viagra") || copyTarget.includes("xxx");
}

function ucFirst(str) {
    // "" converts to 0 where 0 means false.
    if (!str) {
        return ""
    }
    return str[0].toUpperCase() + str.slice(1);
}
