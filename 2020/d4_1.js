// --- Day 4: Passport Processing --- (PART 1)
console.log(require('fs').readFileSync('../input/2020/day4', 'utf8')
    .split('\r\n\r\n').map(e => e.split(/[ \r\n]/)).map(ar => ar.filter(a => a))
    .filter(el => el.length === 8 || (el.length === 7 && !el.some(e => /cid.*/.test(e)))).length)
