// --- Day 1: Calorie Counting ---
const i = require('fs').readFileSync('../input/2022/1', "utf8").split('\r\n\r\n').map(e => e.split('\r\n'));
console.log(i.map(e => e.reduce((a,c)=> +a + +c)).map(e=>+e).sort((a, b) => b-a).slice(0,3).reduce((a, c) => a+c));
