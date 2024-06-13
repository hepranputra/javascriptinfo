// Output prime number from 2 to 10.

"use strict";

let begin = 2;
let end = 10;
for (let n = begin; n <= end; n++) {
    // If we succeed pass the test in for block below, the current
    // number must be a prime number. So, divider variable is a
    // holder place for that result.
    let divider;

    // Why start from 2? Because a prime number can't be evenly divided
    // by anything except 1 and the prime number itself.
    for (divider = 2; divider < n; divider++) {
        if (n % divider == 0) {
            break;
        }
    }

    if (divider == n) {
        console.log(n);
    }
}
