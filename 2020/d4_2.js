// --- Day 4: Passport Processing --- (PART 1)
const fs = require('fs'), input = fs.readFileSync('../input/2020/day4', 'utf8')
    .split('\r\n\r\n').map(e => e.split(/[ \r\n]/)).map(ar => ar.filter(a => a))
    .filter(el => el.length === 8 || (el.length === 7 && !el.some(e => /cid.*/.test(e))))
    .map(el => Object.assign({}, ...el.map(e => {return {[e.split(':')[0]]: e.split(':')[1]}})))
    .filter(el => el.byr.length === 4 && +el.byr >= 1920 && +el.byr <= 2002)
    .filter(el => el.iyr.length === 4 && +el.iyr >= 2010 && +el.iyr <= 2020)
    .filter(el => el.eyr.length === 4 && +el.eyr >= 2020 && +el.eyr <= 2030)
    .filter(el => {
        if(el.hgt.split('cm').length === 2) {
            return +el.hgt.split('cm')[0] >= 150 && +el.hgt.split('cm')[0] <= 193;
        }
        if(el.hgt.split('in').length === 2) {
            return +el.hgt.split('in')[0] >= 59 && +el.hgt.split('in')[0] <= 76;
        }
        return false;
    })
    .filter(el => /#[a-f0-9]{6}$/.test(el.hcl))
    .filter(el => ['amb','blu','brn','gry','grn','hzl','oth'].includes(el.ecl))
    .filter(el => el.pid.length === 9)
console.log(input.length)
