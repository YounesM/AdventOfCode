// --- Day 1: Sonar Sweep --- (1)
const fs = require('fs')
let input = fs.readFileSync('../input/2021/1', 'utf8').split('\r\n')
input = input.map((el, i) => i + 2 <= input.length ? +el + +input[i + 1] + +input[i + 2] : 0);
console.log(input.reduce((a, c, i) => a + (input[i - 1] < +c), 0))
