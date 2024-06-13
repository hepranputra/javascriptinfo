let username = prompt("Enter your username");
const ESC = null;
if (username == "Admin") {
    let password = prompt("Enter your password");
    if (password == "TheMaster") {
        alert("Welcome!");
    } else if (password == "" || password == ESC) {
        alert("Canceled");
    } else {
        alert("Wrong password");
    }
} else if (username == "" || username == ESC) {
    alert("Canceled");
} else {
    alert("I don't know you");
}
