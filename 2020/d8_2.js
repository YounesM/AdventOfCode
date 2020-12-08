// --- Day 8: Handheld Halting --- (PART 2)
const fs = require('fs');
let input = fs.readFileSync('../input/2020/day8', 'utf8').trim().split('\r\n');
let acc = 0, currentInstruction = 0;
let runInstructions = [], switched = [];
let nothingSwitched = true;
while(currentInstruction < input.length) {
    if(runInstructions.includes(currentInstruction)) {
        currentInstruction = 0;
        acc = 0;
        runInstructions = [];
        input = fs.readFileSync('../input/2020/day8', 'utf8').trim().split('\r\n');
        nothingSwitched = true;
    }
    if(nothingSwitched && /jmp|nop/.test(input[currentInstruction].split(' ')[0])
        && !switched.includes(currentInstruction)) {
        switched.push(currentInstruction);
        input[currentInstruction] = /jmp/.test(input[currentInstruction]) ?
            input[currentInstruction].replace(/jmp/, 'nop') :
            input[currentInstruction].replace(/nop/, 'jmp') ;
        nothingSwitched = false;
    }
    runInstructions.push(currentInstruction);
    switch (input[currentInstruction].split(' ')[0]) {
        case 'acc':
            acc += parseInt(input[currentInstruction].split(' ')[1]);
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
