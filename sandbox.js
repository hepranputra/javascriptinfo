// "right now"
alert( formatDate(new Date(new Date - 1)) );

// "30 sec. ago"
alert( formatDate(new Date(new Date - 30 * 1000)) );

// "5 min. ago"
alert( formatDate(new Date(new Date - 5 * 60 * 1000)) );

// yesterday's date like 31.12.16 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );

function formatDate(date) {
    let diff = new Date() - date;
    if (diff < 1000) {
        return 'right now';
    }
    
    let sec = Math.floor(diff / 1000);
    if (sec < 60) {
        return `${sec} sec. ago`;
    }
    
    let min = Math.floor(diff / 60000);
    if (min < 60) {
        return `${min}  min. ago`;
    }
    
    let dateCopy = date;
    dateCopy = [
        `0${dateCopy.getDate()}`,
        `0${dateCopy.getMonth() + 1}`,
        `${dateCopy.getFullYear()}`,
        `0${dateCopy.getHours()}`,
        `0${dateCopy.getMinutes()}`
    ].map(component => component.slice(-2));
    
    return dateCopy.slice(0, 3).join('.') + ' ' + dateCopy.slice(3).join(':');
}

function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDay() + 1
    );
    let diff = tomorrow - now;
    return Math.round(diff / 1000);
}

function getSecondsToday2() {
    let date = new Date();
    let hours = date.getHours() * 3600;
    let minutes = date.getMinutes() * 60;
    return hours + minutes + date.getSeconds();
}

function getSecondsToday() {
    let now = new Date();
    let today = new Date(
        now.getFullYear(), now.getMonth(), now.getDay()
    );
    
    let diffInMillis = now - today;
    return Math.round(diffInMillis / 1000);
}

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}
