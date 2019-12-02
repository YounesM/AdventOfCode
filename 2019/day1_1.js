// --- Day 1: The Tyranny of the Rocket Equation ---
const fs = require('fs'), input = fs.readFileSync('input/2019/day1', 'utf8').split('\r\n');
input.pop();
console.log('PART 1:'+ input.reduce((a, c) => +a + Math.trunc(+c/3)-2, 0));
