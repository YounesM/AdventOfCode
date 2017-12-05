// --- Day 1: Inverse Captcha (1/2)---
//

const fs = require('fs');
let input = fs.readFileSync('input/2017/day1', 'utf8');
let sum = 0;
for (let i = 0; i < input.split('').length; i++) {
    if (input[i] === input[(i+1)% input.length]) {
        sum += parseInt(input[i]);
    }
}

console.log('PART 1: ' + sum);