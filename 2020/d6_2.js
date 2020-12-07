// --- Day 6: Custom Customs --- (PART 2)
const fs = require('fs'), input = fs.readFileSync('../input/2020/day6', 'utf8')
    .split('\r\n\r\n').map(e => e.split(/[ \r\n]/)).map(ar => ar.filter(a => a));
const intersect = (arr) => {
    return arr.reduce((a, c) => a.filter(el => c.includes(el)))
}
console.log(input.map(e => e.map(el => [...el])).map(e => intersect(e).length).reduce((a,c)=> a +c));
