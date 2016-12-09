const fs = require("fs");
let input = fs.readFileSync('input/day9','utf8');

let ans = 0;
let match = input;
while(input.length > 0 && match){
    match = input.match(/\((.*?)\)/);
    if(match){
        match.index!=0?ans+=match.index:ans+=(parseInt(match[1].split('x')[1]))*(parseInt(match[1].split('x')[0]));
        match.index!=0?input=input.slice(match.index, input.length):input=input.slice(match[0].length + parseInt(match[1].split('x')[0]), input.length);
    } else {
        input.length > 0 ? ans+=input.length:0;
        input.length = '';
    }
}
console.log("Part 1 : "+ans);