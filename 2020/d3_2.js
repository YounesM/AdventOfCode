// --- Day 3: Toboggan Trajectory --- (PART 1)
const fs = require('fs'), input = fs.readFileSync('../input/2020/day3', 'utf8')
    .trim().split('\r\n');
const slopesToTry = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];

console.log(slopesToTry.map(e => slidingDown(e)).reduce((a,c) => a*c))

function slidingDown(slope) {
    let currentPos = 0, treeInTheWay = 0;
    input.forEach((line, i) => {
        if (!(i % slope[1])) {
            const cols = line.split('');
            if (cols[currentPos % 31] === '#') {
                treeInTheWay++;
            }
            currentPos += slope[0];
        }
    });
    return treeInTheWay;
}
