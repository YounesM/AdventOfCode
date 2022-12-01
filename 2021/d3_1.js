// --- Day 3: Binary Diagnostic --- (1)
const fs = require('fs')
const input = fs.readFileSync('../input/2021/3', 'utf8').trim().split('\r\n')
const gamma = input.reduce((a, c) => a.map((el, i) => el + +c.split('')[i]),
    Array(input[0].length).fill(0))
    .map(el => el > input.length / 2 ? 1 : 0)
    .join()
    .replace(/,/g, '')
const epsilon = gamma.split('').map(el => +!+el)
    .join()
    .replace(/,/g, '')
console.log(parseInt(gamma, 2)*parseInt(epsilon, 2))
