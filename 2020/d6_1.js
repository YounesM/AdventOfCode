// --- Day 6: Custom Customs --- (PART 1)
const fs = require('fs'), input = fs.readFileSync('../input/2020/day6', 'utf8')
    .split('\r\n\r\n').map(e => e.split(/[ \r\n]/)).map(ar => ar.filter(a => a));
console.log(input.map(e => new Set([].concat(...e.map(el => [...el]))).size).reduce((a, c) => a + c));
