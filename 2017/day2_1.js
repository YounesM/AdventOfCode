// --- Day 1: Inverse Captcha (1/2)---
//

const fs = require('fs');
let input = fs.readFileSync('input/2017/day2', 'utf8');
let csum = 0;

input.split('\r\n').forEach(e => {
    csum += Math.max.apply(Math,e.split('\t')) - Math.min.apply(Math,e.split('\t'));
});

console.log('PART 1: ' + csum);