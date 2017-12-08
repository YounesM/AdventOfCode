const fs = require('fs');
let input = fs.readFileSync('input/2017/day7', 'utf8').split('\r\n'), progs = [];
input.forEach(e => {
	let prog = {children: []};
	prog.name = e.split(' ')[0];
	prog.weight = e.split(' ')[1].replace('(','').replace(')','');
	if(e.split('->')[1])
        e.split('->')[1].split(',').forEach(el => {
            prog.children.push(el.replace(' ',''))
        });
    progs.push(prog);
});
progs.filter(e => {return e.children.length === 0}).forEach(prog => {
	console.log(prog.name)
	console.log(progs.find(e => {return e.children.indexOf(prog.name) !== -1}))
});
