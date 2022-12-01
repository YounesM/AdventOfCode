// --- Day 1: Sonar Sweep --- (1)
const fs = require('fs'), input = fs.readFileSync('../input/2021/1', 'utf8').split('\r\n');
console.log(input.reduce((a, c, i) => a+(input[i-1] < +c), 0))
