// --- Day 9: Stream Processing ---
const fs = require('fs');
let input = fs.readFileSync('input/2017/day9', 'utf8'), score = 0, cpt = 1, isGarbage = false, garbage = 0;
for(let i=0; i < input.length; i++) {
    if (input[i] === '!') i++;
    else if (isGarbage && input[i] !== '>') garbage++;
    else if (input[i]=== '<') isGarbage = true;
    else if (input[i]=== '>') isGarbage = false;
    else if (input[i]=== '{') score += cpt++;
    else if (input[i]=== '}') cpt--;
}

console.log('PART 1: '+ garbage);
