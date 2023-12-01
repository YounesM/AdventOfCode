// --- Day 3: Crossed Wires ---
const fs = require('fs');
let input = fs.readFileSync('input/2019/day3', 'utf8').split('\r\n'),
  wires = [new Set(["0,0"]), new Set(["0,0"])];

for (let i = 0; i < 2; i++) {
  input[i].split(',').forEach(coord => {
    let inst = coord.match(new RegExp('[U,D,R,L]','igm'))[0],
      length = coord.split(new RegExp('[U,D,R,L]', 'igm'))[1];
    moveTo(Array.from(wires[i]).pop(), inst, length, wires[i]);
  });
}

const intersect = [...wires[0]].filter(val => wires[1].has(val));
let min;

intersect.forEach(coord => {
    let steps1 = 0, steps2 = 0;
    if (coord !== '0,0') {
      steps1 = [...wires[0]].findIndex(val => val === coord);
      steps2 = [...wires[1]].findIndex(val => val === coord);
    }
    min = min ? Math.min(steps2 + steps1, min) : steps1 + steps2;
});

console.log('PART 1:'+ min);

function moveTo(coord, direction, length, array) {
  let x = coord.split(',')[0], y = coord.split(',')[1];
  for (let i = 1; i <= length; i++) {
    switch (direction) {
      case 'D':
        array.add(x + ',' + (+y-i));
        break;
      case 'U':
        array.add(x + ',' + (+y+i));
        break;
      case 'L':
        array.add((+x+i) + ',' + y);
        break;
      case 'R':
        array.add((+x-i) + ',' + y);
        break;
    }
  }
}
