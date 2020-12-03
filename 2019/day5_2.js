// --- Day 5: Sunny with a Chance of Asteroids --- (PART 2)
const fs = require('fs');
let i = fs.readFileSync('../input/2019/day5', 'utf8').split(','), j = 0, input = 5;
while (i[j] !== 99) {
    const [optCode, , c, b, a] = [...i[j].toString()].reverse();
    const param1 = !!+c ? +i[j + 1] : +i[i[j + 1]];
    const param2 = !!+b ? +i[j + 2] : +i[i[j + 2]];
    switch (+optCode) {
        case 1:
            i[i[j + 3]] = param1 + param2
            j += 4;
            break;
        case 2:
            i[i[j + 3]] = param1 * param2
            j += 4;
            break;
        case 3:
            i[i[j + 1]] = input;
            j += 2;
            break;
        case 4:
            console.log(param1);
            j += 2;
            if (!!+param1) {
                i[j] = 99;
            }
            break;
        case 5:
            j = param1 ? param2 : j + 3;
            break
        case 6:
            j = param1 ? j + 3 : param2;
            break;
        case 7:
            i[i[j + 3]] = param1 < param2 ? 1 : 0;
            j += 4;
            break;
        case 8:
            i[i[j + 3]] = param1 === param2 ? 1 : 0;
            j += 4;
            break;
    }
}
