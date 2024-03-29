const fs = require('fs');
let input = fs.readFileSync('input/2017/day8', 'utf8').split('\r\n'), register = [], max = 0;
input.forEach(line => {
    if(register[line.split('if')[1].replace(' ','').split(' ')[0]] === undefined) {
        register[line.split('if')[1].replace(' ','').split(' ')[0]] = 0;
    }
    if(register[line.split('if')[0].split(' ')[0]] === undefined) {
        register[line.split('if')[0].split(' ')[0]] = 0;
    }
    if(eval(line.split('if')[1].replace(line.split('if')[1].replace(' ','').split(' ')[0], 'register[\''+line.split('if')[1].replace(' ','').split(' ')[0]+'\']').replace(' ',''))){
        if(line.split('if')[0].split(' ')[1] === 'dec'){
            register[line.split('if')[0].split(' ')[0]] -= +line.split('if')[0].split(' ')[2];
        } else {
            register[line.split('if')[0].split(' ')[0]] += +line.split('if')[0].split(' ')[2];
        }
        max = Math.max.apply(Math,[register[line.split('if')[0].split(' ')[0]],max])
    }
});
console.log('PART 1: '+ max);
