// --- Day 4: High-Entropy Passphrases (1/2)---
const fs = require('fs');
let input = fs.readFileSync('input/2017/day5', 'utf8').split('\r\n'), step = 0, i=0;
while (input.length > i && i >= 0){
    i += input[i] >= 3 ? input[i]-- : input[i]++;
    step++;
}
console.log('PART 2: '+ step);