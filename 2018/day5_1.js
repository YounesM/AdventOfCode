//day 5
const fs = require('fs');
let polymers = fs.readFileSync('../input/2018/day5', 'utf8');
let units = polymers.split(''), currentChar = '',
originalLength = units.length, currentLength = 0;

while(originalLength !== currentLength) {
  let step = 0;
  if(currentLength) {
    originalLength = currentLength;
  }
  while(step < units.length) {
    currentChar = units[step];
    if (units[step+1] && units[step+1] !== currentChar
       && units[step].match(new RegExp(units[step+1],'i'))) {
      units.splice(step, 2)
    } else {
      step++;
    }
  }
  currentLength = units.length;
}

console.log("Number of units : " + units.toString().replace(/,/gm,'').length);
