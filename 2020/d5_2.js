// --- Day 5: Binary Boarding --- (PART 2)
const fs = require('fs'), input = fs.readFileSync('../input/2020/day5', 'utf8').trim().split('\r\n');
console.log(input.map(e => getId(e)).find(e => input.map(e => getId(e)).includes(e+2) && !input.map(e => getId(e)).includes(e+1))+1);

function getId(code) {
    return parseInt(code.replace(/[FL]/g,0).replace(/[BR]/g,1),2);
}
