// --- Day 1: Report Repair --- (PART 1)
const fs = require('fs'), input = fs.readFileSync('../input/2020/day1', 'utf8').split('\r\n');
try {
    input.forEach(a => input.forEach(b => {
        let FoundException = {a: a, b: b}
        if (+a + +b === 2020) throw FoundException
    }));
} catch (e) {
    console.log(e.a*e.b)
}

