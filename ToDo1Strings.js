function removeBlanks(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            newStr += str[i];
        }
    }
    return newStr;
}
function getDigits(str) {
    let numStr = "";
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            numStr += str[i];
        }
    }
    return Number(numStr);
}
function acronym(str) {
    let words = str.split(" ");
    let acronym = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== "") {
            acronym += words[i][0].toUpperCase();
        }
    }
    return acronym;
}
function countNonSpaces(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            count++;
        }
    }
    return count;
}
function removeShorterStrings(arr, num) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= num) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
