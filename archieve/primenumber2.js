// Version 2.

function showPrime(limit) {
    for (let n = 2; n <= limit; n++) {
        if (!isPrime(n)) {
            continue;
        }
        console.log(n);
    }
}

function isPrime(n) {
    for (let divider = 2; divider < n; divider++) {
        if (n % divider == 0) {
            return false;
        }
    }
    return true;
}

showPrime(10);
