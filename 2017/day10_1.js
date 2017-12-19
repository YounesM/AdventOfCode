// --- Day 9: Stream Processing ---
const fs = require('fs');
// let input = fs.readFileSync('input/2017/day10', 'utf8').split(','),
let input = "3,4,2,5,1".split(','),
    list = new Array(6).fill(0).map((e, i) => (i)), step = 0;
for (let i = 0, c = list[0]; i < input.length; i++, c = list[(+input[i] + step++)%list.length-1]) {
    let subArray = new Array(+input[i]).fill(0).map((e, i) => (list[(c + i) % list.length])).reverse();
    list = list.map((e, i) => ((list.length + i - list.indexOf(c))%list.length < subArray.length ? subArray[(list.length + i - list.indexOf(c))%list.length]: e));
}
console.log('PART 1: ' + list[0] * list[1]);