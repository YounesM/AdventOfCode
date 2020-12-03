// --- Day 3: Toboggan Trajectory --- (PART 1)
const fs = require('fs'), input = fs.readFileSync('../input/2020/day3', 'utf8')
    .trim().split('\r\n');
let currentPos = 0, treeInTheWay = 0;
input.forEach(line => {
    const cols = line.split('');
    if (cols[currentPos % 31] === '#') {
        treeInTheWay++;
    }
    currentPos += 3;
});
console.log(treeInTheWay);
