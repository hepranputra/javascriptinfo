// Need HTML.

alert(`SUM: ${sumInput()}`);

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
        
        if (!isFinite(n) || n === null || n === "" || +n < 0) {
            alert("The program is stopped");
            break;
        }
        
        numbers.push(+n);
    }
    
    let sum = 0;
    for (let n of numbers) {
        sum = sum + n;
    }
    
    console.log(numbers);
    return sum;
}
