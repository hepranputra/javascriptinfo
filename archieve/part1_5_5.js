/*
 * Source:
 * https://javascript.info/array-methods
 */

function groupById(array) {
    return array.reduce((obj, elem) => {
        obj[elem.id] = elem;
        return obj;
    }, {});
}

function unique(arr) {
    let uniqueArr = [];
    for (let elem of arr) {
        if (!uniqueArr.includes(elem)) {
            uniqueArr.push(elem);
        }
    }
    return uniqueArr;
}

function getAverageAge(array) {
    // let ages = array.map(elem => elem.age);
    // 
    // let total = 0;
    // for (let age of ages) {
    //     total += age;
    // }
    // 
    // return total / ages.length;
    
    return array.reduce((total, user) => total + user.age, 0) / array.length;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function sortByAge(array) {
    array.sort((a, b) => a.age - b.age);
}

function Calculator() {
    this.methods = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    };
    
    this.calculate = str => {
        let splitArr = str.split(' ');
        
        let a = +splitArr[0];
        let op = splitArr[1];
        let b = +splitArr[2];
        
        
        // this.methods[op] checks whether the availability of  operator.
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        
        return this.methods[op](a, b);
    };
    
    this.addMethod = (op, func) => {
        this.methods[op] = func;
    };
}

// Clone then modify the clone.
function copySorted(array) {
    return array.slice().sort();
}

function compareNumeric(a, b) {
    if (a > b) {
        return 1;
    }
    if (a == b) {
        return 0;
    }
    if (a < b) {
        return -1;
    }
}

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        if (value < a || value > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

function filterRange(array, min, max) {
    // let modArray = [];
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] >= min && array[i] <= max) {
    //         modArray.push(array[i]);
    //     }
    // }
    // return modArray;
    return array.filter(elem => (elem >= min && elem <= max));
}

function camelize(str) {
    return str
        .split('-')
        .map((elem, index) => index == 0
            ? elem
            : elem[0].toUpperCase() + elem.slice(1))
        .join('');
}
