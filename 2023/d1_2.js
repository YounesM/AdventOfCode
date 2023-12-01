const i = require('fs').readFileSync('../input/2023/1', "utf8").split('\r\n\r\n').map(e => e.split('\r\n'));
let list = i[0].filter(e => e.length);
const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
list = list.map(e => {
    const num = e.split('').map(el => el.match(/\d/)?el:'');
    numbers.forEach(n => {
        const reg = new RegExp(n, 'g')
        let m = reg.exec(e);
        while (m) {
            const position = m.index;
            num[position] = numbers.indexOf(n).toString();
            m = reg.exec(e);
        }
    })
    return num.join('');
})
console.log(list.reduce((a, c) => a + +(c.match(/\d/)[0] + c.match(/.*(\d)\D*$/u)[1]), 0))
