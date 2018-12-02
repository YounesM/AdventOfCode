// --- Day 1: Chronal Calibration (Part 2)---
const fs = require('fs');
let input = fs.readFileSync('input/2018/day1', 'utf8').split('\r\n').map(Number),
    prevValues = new Set(), frequency = 0,
    flag = true;

while (flag) {
    for (let value of input) {
        prevValues.add(frequency);
        frequency += value;
        if (prevValues.has(frequency)) {
            return console.log(frequency);
        }
    }
}