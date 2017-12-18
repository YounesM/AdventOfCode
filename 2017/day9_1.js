// --- Day 9: Stream Processing ---
const fs = require('fs');
let input = fs.readFileSync('input/2017/day9', 'utf8'), score = 0;
while(input.match('!')){
    for(let i = 0; i < input.length ; i++ ){
        if(input[i] === '!'){
            input = input.slice(0,i) + input.slice(i+1);
        }
    }
}


console.log('PART 1: '+ input);