const i = require('fs').readFileSync('../input/2023/3', "utf8").split('\r\n\r\n').map(e => e.split('\r\n'));
const matrix = i[0].filter(e => e.length).map(el => el.split(''));
let partNumbers = []
const gearPowers= []

matrix.forEach((line, i) => {
    //Regexp that matches anything that isn't a number or a .
    let regexp = /\d/g;
    line.forEach((e, j) => {
        if (e.match(regexp) && isPartNumber(i, j)) {
            partNumbers.push(getFullNumber(i, j));
        }
    })
})

function isPartNumber(i,j){
    for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
            if (i + x < 0 || i + x >= matrix.length || j + y < 0 || j + y >= matrix[i].length) {
                continue;
            }
            if (x === 0 && y === 0) continue; // Skip the center element
            if (matrix[i + x][j + y].match(/[^\d.]/g)) {
                return true;
            }
        }
    }
    return false;
}

function getFullNumber(i,j) {
    let number = {
        value: matrix[i][j],
        line: i,
        startIndex: j,
        endIndex: j
    }
    let pointer = j;
    while (matrix[i][pointer+1]?.match(/\d/g)) {
        number.value += matrix[i][++pointer];
    }
    number.endIndex = pointer;
    pointer = j;
    while (matrix[i][pointer-1]?.match(/\d/g)) {
        number.value = matrix[i][--pointer] + number.value
    }
    number.startIndex = pointer;
    return number;
}

//Remove duplicates
partNumbers = [...new Set([...partNumbers].map(x => JSON.stringify(x)))].map(x => JSON.parse(x));
console.log("Part 1:");
console.log(partNumbers.reduce((acc, e) => acc + +e.value, 0));

//Part 2
function findGears(){
    matrix.forEach((line, i) => {
        //Regexp that matches *.
        let regexp = /\*/g;
        line.forEach((e, j) => {
            if (e.match(regexp)) {
                const result = partNumbers.filter(el => {
                    return (el.line === i || el.line === i+1 || el.line === i-1)
                        && (el.startIndex === j || el.startIndex === j+1 || el.startIndex === j-1
                            || el.endIndex === j || el.endIndex === j+1 || el.endIndex === j-1);
                })
                if(result.length === 2) {
                    gearPowers.push(getGearPower(result));
                }
            }
        })
    })
}

function getGearPower(result) {
    return result[0].value * result[1].value;
}

findGears();
console.log("Part 2:");
console.log(gearPowers.reduce((acc, e) => acc + e, 0));
