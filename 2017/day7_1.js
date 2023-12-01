// --- Day 7: Recursive Circus (1/1) ---
const fs = require('fs');
let input = fs.readFileSync('input/2017/day7', 'utf8').split('\r\n'), holding = [], held = [];
input.forEach(e => {
    holding.push(e.split(' ')[0]);
    if(e.split('->')[1])
        e.split('->')[1].split(',').forEach(el => {
            held.push(el.replace(' ',''))
        });
});
console.log('PART 1: ' + holding.filter(e => {return held.indexOf(e) === -1}));
