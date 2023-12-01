// --- Day 1: Inventory Management System (Part 1)---
const fs = require('fs');
let input = fs.readFileSync('input/2018/day2', 'utf8').split('\r\n'), minDiff = 100, sameBoxes = {};
input.forEach(string => {
   input.forEach(string2 => {
       if(string !== string2 && minDiff > getDifferNumber(string, string2)) {
           sameBoxes.box1 = string;
           sameBoxes.box2 = string2;
           minDiff = getDifferNumber(string, string2)
       }
   })
});

function getDifferNumber(str1, str2) {
    let diff = 0;
    Array.from(str1).forEach((char,i) => {
        char !== str2.charAt(i) ? ++diff : 0;
    });
    return diff;
}

function removeDiffChars(str1, str2) {
    let str = str1.slice();
    Array.from(str1).forEach((char,i) => {
        if(char !== str2.charAt(i)) {
            str = str.replace(new RegExp(char,'g'), '');
        }
    });
    return str;
}
console.log('PART 1: ' + removeDiffChars(sameBoxes.box1, sameBoxes.box2));
