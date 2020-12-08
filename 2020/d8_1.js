// --- Day 8: Handheld Halting --- (PART 1)
const fs = require('fs'), input = fs.readFileSync('../input/2020/day8', 'utf8').trim().split('\r\n');
let acc = 0, currentInstruction = 0;
const runInstructions = [];
while(!runInstructions.includes(currentInstruction)) {
    runInstructions.push(currentInstruction);
    switch (input[currentInstruction].split(' ')[0]) {
        case 'acc':
            acc += parseInt(input[currentInstruction].split(' ')[1])
            currentInstruction++;
            break;
        case 'jmp':
            currentInstruction += parseInt(input[currentInstruction].split(' ')[1]);
            break;
        default:
            currentInstruction++;
            break;
    }
}
console.log(acc)
