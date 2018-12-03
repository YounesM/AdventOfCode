// --- Day 10: Knot Hash (Part 1) ---
const fs = require('fs');
let input = fs.readFileSync('input/2017/day10', 'utf8').split(','),
    list = new Array(256).fill(0).map((e, i) => (i)), skip = 0, currentPos = 0;
input.forEach(el => {
    reverseOrder(list, el, currentPos);
    currentPos = (currentPos + (+el + skip))%(list.length);
    skip++;
});
function reverseOrder(array, length, start) {
    let cpt = 0, i = start, j = (length -1 + i) % (array.length);
    while (cpt < Math.floor(length / 2)) {
        let c = array[i];
        array[i] = array[j];
        array[j] = c;
        i = ++i % array.length;
        j = (--j % array.length + array.length) %  array.length;
        cpt++;
    }
}
console.log('PART 1: ' + list[0] * list[1]);