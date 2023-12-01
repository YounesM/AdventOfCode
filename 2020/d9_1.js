// --- Day 9: Encoding Error --- (PART 1)
const fs = require('fs'), input = fs.readFileSync('../input/2020/day9', 'utf8').trim().split('\n');
let inc = 0;
try {
    while (true) {
        let subArr = input.splice(inc, inc + 26);
        let target = input[inc + 26];
        while (true) {
            let i = 1;
            if (subArr[0] + subArr[i] === target) {
                break;
            }
            if (i < subArr.length) {
                subArr = subArr.slice(1);
            }
            i++;
        }
    }
} catch (e) {
    console.log(e)
}
