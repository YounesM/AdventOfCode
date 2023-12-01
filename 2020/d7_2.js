// --- Day 7: Handy Haversacks --- (PART 1)
// This is slow AF because of the 3 loops, you probably can do better with recursive functions
// or some Array.reduce() shenanigans but I'm lazy.
// Might change this one day if I'm harassed or my life is threatened
const fs = require('fs');
let input = fs.readFileSync('../input/2020/day7', 'utf8').trim().split('\r\n');
let startLength = 0;
while (startLength !== input.toString().length) {
    startLength = input.toString().length;
    input.forEach(el => {
        let bagcolor = el.split('bags')[0].trim();
        let content = el.split('contain')[1].trim();
        if (content !== 'no other bags.' && bagcolor !== 'shiny gold') {
            input = input.map(e => e.replace(' ' + bagcolor + ' bag', ' (' + content + ')'));
        }
    });
}
console.log(eval(input.find(e=> /^shiny gold/.test(e)).split('contain')[1]
    .replace(/(\w+) (\w+) bag(s?\.?)/gm, '')
    .replace(/s\.?/gm,'')
    .replace(/,/gm,'+')
    .replace(/ \(/gm,'*(1+')
    .replace(/ \)/gm,')')))
