let map = new Map();

map.set('name', 'john');

// let keys = Array.from(map.keys());
let keys = [...map.keys(), 'more'];

console.log(keys);
keys.push('more');
console.log(keys);
