// --- Day 1: Report Repair --- (PART 1)
const fs = require('fs'), input = fs.readFileSync('../input/2020/day1', 'utf8').split('\r\n');
input.forEach(a => input.forEach(b => {
    if (+a + +b === 2020) {
        console.log(a*b);
    }
}));
