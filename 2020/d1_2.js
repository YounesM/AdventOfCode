// --- Day 1: Report Repair --- (PART 2)
const fs = require('fs'), input = fs.readFileSync('../input/2020/day1', 'utf8').split('\r\n');
input.forEach(a => input.forEach(b => { input.forEach(c => {
    if (+a + +b + +c === 2020) {
        console.log(a*b*c);
    }
})}));
