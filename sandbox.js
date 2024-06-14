"use strict";

let age = 16; // take 16 as an example
let welcome;

if (age < 18) {
    welcome = function() {
        alert("Hello!");
    }
} else {
    
    welcome = function() {
        alert("Greetings!");
    }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

welcome(); // Error: welcome is not defined
