const i = require('fs').readFileSync('../input/2023/1', "utf8").split('\r\n\r\n').map(e => e.split('\r\n'));
const list = i[0].filter(e => e.length);
console.log(list.reduce((a, c) => a + +(c.match(/\d/)[0]+c.match(/.*(\d)\D*$/u)[1]),0))
