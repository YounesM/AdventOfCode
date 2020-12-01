// --- Day 5: Sunny with a Chance of Asteroids ---
const fs = require('fs');
let i = fs.readFileSync('input/2019/day5', 'utf8').split(',').map(e => parseInt(e)), j = 0;
while (i[j] !== 99) {
    switch (i[j]) {
        case 1:
            i[i[j + 3]] = i[i[j + 1]] + i[i[j + 2]];
            j += 4;
            break;
        case 2:
            i[i[j + 3]] = i[i[j + 1]] * i[i[j + 2]];
            j += 4;
            break;
        case 3:
            j += 2;
            break;
        case 4:
            j += 2;
            break;
    }
}
