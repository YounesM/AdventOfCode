// --- Day 1: Chronal Calibration (Part 1)---
const fs = require('fs');
let input = fs.readFileSync('input/2018/day1', 'utf8').split('\r\n');
console.log('PART 1: ' + input.reduce((a,c) => +a + +c));