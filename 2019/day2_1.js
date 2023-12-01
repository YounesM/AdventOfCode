// --- Day 1: 1202 Program Alarm ---
const fs = require('fs');
let i = fs.readFileSync('input/2019/day2', 'utf8').split(',').map(e => parseInt(e)), j = 0;
while (i[j] !== 99) {
  i[j]===1?i[i[j + 3]] = i[i[j + 1]] + i[i[j + 2]]:i[i[j + 3]] = i[i[j + 1]] * i[i[j + 2]];
  j += 4;
}
console.log(i[0]);
