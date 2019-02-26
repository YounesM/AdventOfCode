//day 5 part 2
const fs = require('fs');
let polymers = fs.readFileSync('../input/2018/day5', 'utf8'),
minLength = polymers.length;


for(let i = 97; i < 97+26; i++) {
  let units = polymers.replace('\r\n','').replace(new RegExp(String.fromCharCode(i),'igm'), '').split(''),
  currentChar = '',
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
        units.splice(step, 2);
      } else {
        step++;
      }
    }
    currentLength = units.length;
  }

  if(minLength >= units.toString().replace(/,/gm,'').length) {
    minLength = units.toString().replace(/,/gm,'').length;
  }
}

console.log("Minimum lenght : " + minLength);
