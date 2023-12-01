// --- Day 1: Password Philosophy --- (PART 1)
const fs = require('fs'), input = fs.readFileSync('../input/2020/day2', 'utf8').trim().split('\r\n');
console.log(input.filter(line => {
    const [,min, max, target, pass,] = line.split(/(\d+)-(\d+) (\w): (\w+)/);
    return [...pass][min - 1] === target ^ [...pass][max -1] === target;
}).length);
