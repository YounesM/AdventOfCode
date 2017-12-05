// --- Day 1: Inverse Captcha (1/2)---
//

const fs = require('fs');
let input = fs.readFileSync('input/2017/day1','utf8');
let sum = 0;
for(let i=0; i < input.split('').length; i++){
    if(i < input.length-1) {
        if(input[i] === input[i+1]){
            sum += parseInt(input[i]);
        }
    } else {
        if(input[i] === input[0]){
            sum += parseInt(input[i]);
        }
    }
}

console.log('PART 1: '+sum);