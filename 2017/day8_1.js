// --- Day 8: I Heard You Like Registers (1/1)---
const fs = require('fs');
let input = fs.readFileSync('input/2017/day8', 'utf8').split('\r\n'), reg = [];
input.forEach(inst => {
    if(!reg.find(e =>(e.name === inst.split('if')[0].split(' ')[0]))) {
        reg.push({name: inst.split('if')[0].split(' ')[0], value: 0});
    }
    if(!reg.find(e =>(e.name === inst.split('if')[1].split(' ')[0]))) {
        reg.push({name: inst.split('if')[1].split(' ')[0], value: 0});
        inst.split('if')[1].replace(inst.split('if')[1].split(' ')[0],'reg['+reg.length-1+'].name')
    }
    if(eval(inst.split('if')[1])){

    }
});
