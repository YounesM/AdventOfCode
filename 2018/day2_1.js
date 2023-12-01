// --- Day 1: Inventory Management System (Part 1)---
const fs = require('fs');
let input = fs.readFileSync('input/2018/day2', 'utf8').split('\r\n'), val2 = 0, val3 = 0;
for(const value of input) {
    let match2 = false, match3 = false;
    Array.from(value).forEach(char => {
        if(!match2 && (value.match(new RegExp(char,'g')) || []).length === 2) {
            match2 = true;
            val2++;
        }
        if(!match3 && (value.match(new RegExp(char,'g')) || []).length === 3) {
            match3 = true;
            val3++;
        }
    })
}
console.log('PART 1: ' + val2*val3);
