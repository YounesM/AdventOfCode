// --- Day 2: 1202 Program Alarm ---
const fs = require('fs');
let i = [], j = 0;
reset = (k,l) => {
  i = fs.readFileSync('input/2019/day2', 'utf8').split(',').map(e => parseInt(e));
  i[1] = k; i[2] = l;
  j = 0;
};
try {
  [...Array(100).keys()].forEach(k => {
    [...Array(100).keys()].forEach(l => {
      reset(k,l);
      while (i[j] !== 99) {
        i[j] === 1 ? i[i[j + 3]] = i[i[j + 1]] + i[i[j + 2]] : i[i[j + 3]] = i[i[j + 1]] * i[i[j + 2]];
        j += 4;
      }
      if(i[0] === 19690720) throw {val: 100 * i[1]+i[2]}
    })
  });
} catch (e) {
  console.log('PART 2:' + e.val);
}

