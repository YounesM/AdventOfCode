const fs = require('fs');
let input = fs.readFileSync('input/2017/day6', 'utf8').split('\t'), set = new Set().add(input.toString()), isSame = false;
while (!isSame) {
    let currentArr = Array.from(set).pop().split(','), payload = Math.max.apply(Math, currentArr),
        currentIndex = currentArr.indexOf(payload.toString()), previousSize = set.size;
    currentArr[currentIndex] = 0;
    while (payload > 0) {
        currentArr[++currentIndex % currentArr.length]++;
        payload--;
    }
    set.add(currentArr.toString());
    isSame = previousSize === set.size;
}
console.log('PART 1: ' + set.size);