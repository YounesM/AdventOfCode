// --- Day 4: High-Entropy Passphrases (1/1)---
const fs = require('fs');
let input = fs.readFileSync('input/2017/day4', 'utf8'), cnt = 0;
input.split('\r\n').forEach(e => {
    let set = new Set();
    e.split(' ').forEach(el => {set.add(el.split('').sort().join(''))});
    if(set.size === e.split(' ').length) cnt++;
});
console.log('PART 1: '+ cnt);
