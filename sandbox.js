let x = +prompt("Enter number (x):");
let n = +prompt("Enter its power (n):");
let result = pow(x, n);
alert(`${x} to the power of ${n} is ${result}`);

function pow(x, n) {
    return x ** n;
}
