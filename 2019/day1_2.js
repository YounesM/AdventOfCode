// --- Day 1: The Tyranny of the Rocket Equation ---
const fs = require('fs'), input = fs.readFileSync('input/2019/day1', 'utf8').split('\r\n');
input.pop();
const f = (n) => Math.trunc(n/3)-2 <= 0 ? 0 : Math.trunc(n/3)-2 + f(Math.trunc(n/3)-2);
console.log('PART 2:'+ input.reduce((a, c) => +a + f(+c), 0));
