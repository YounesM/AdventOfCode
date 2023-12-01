// --- Day 1: Corruption Checksum (1/1)---
const fs = require('fs');
let input = fs.readFileSync('input/2017/day2', 'utf8'), csum = 0;
input.split('\r\n').forEach(e => {
    let n, row = e.split('\t').sort((a,b)=>{return parseInt(a)- parseInt(b)});
    while(row.length) {
        n = row.pop();
        csum += row.find(a => {return parseInt(n) % parseInt(a) === 0}) ?
            parseInt(n) / row.find(a => {return parseInt(n) % parseInt(a) === 0}) : 0;
    }
});
console.log('PART 1: ' + csum);
