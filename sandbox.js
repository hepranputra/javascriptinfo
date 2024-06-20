console.log(extractCurrencyValue('$120') === 120); // true

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
