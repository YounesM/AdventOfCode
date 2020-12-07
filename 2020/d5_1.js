// --- Day 5: Binary Boarding --- (PART 1)
const fs = require('fs'), input = fs.readFileSync('../input/2020/day5', 'utf8').trim().split('\r\n');
console.log(Math.max(...input.map(e => getId(e))));

function getId(code) {
    return parseInt(code.replace(/[FL]/g,0).replace(/[BR]/g,1),2);
}
