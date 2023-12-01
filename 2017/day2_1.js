// --- Day 1: Corruption Checksum (1/1)---
const fs = require('fs');
let input = fs.readFileSync('input/2017/day2', 'utf8'), csum = 0;
input.split('\r\n').forEach(e => {
    csum += Math.max.apply(Math, e.split('\t')) - Math.min.apply(Math, e.split('\t'));
});
console.log('PART 1: ' + csum);
