// --- Day 7: Recursive Circus (1/1) ---
const fs = require('fs');
let input = fs.readFileSync('input/2017/day7', 'utf8').split('\r\n'), progs = [], badVal, culprits = [];
input.forEach(e => {
    let prog = {children: []};
    prog.name = e.split(' ')[0];
    prog.weight = e.split(' ')[1].replace('(', '').replace(')', '');
    if (e.split('->')[1])
        e.split('->')[1].split(',').forEach(el => {
            prog.children.push(el.replace(' ', ''))
        });
    progs.push(prog);
});
progs.forEach(prog => {
    prog.weight = realWeight(prog);
});
progs.forEach(prog => {
    if (prog.children.length && !prog.children.every((w, i, arr) => {
            return findPrg(w).weight === findPrg(arr[0]).weight
        }))
        culprits.push(prog);
});
let set = new Set();
culprits[0].children.forEach(child => {
    set.add(findPrg(child).weight);
    badVal = [...set];
});
if (culprits[0].children.filter(e => {return findPrg(e).weight === badVal[0]}).length > 1) {
    console.log("PART 1: "+culprits[0].children.find(e => {return findPrg(e).weight === badVal[1]}) +" + "+ -Math.abs(badVal[0]-badVal[1]));
} else {
    console.log(culprits[0].children.find(e => {return findPrg(e).weight === badVal[0]}) +" + "+ -Math.abs(badVal[0]-badVal[1]));
}
function realWeight(prog) {
    if (prog.children && prog.children.length > 0 && typeof prog.weight === 'string') {
        let children = [];
        prog.children.forEach(child => {
            children.push(Object.assign({}, progs.find(e => {
                return e.name === child
            })));
        });
        return parseInt(prog.weight) + children.reduce((a, b) => ({weight: parseInt(realWeight(a)) + parseInt(realWeight(b))})).weight;
    }
    return parseInt(prog.weight);
}
function findPrg(name) {
    return progs.find(e => {
        return e.name === name
    });
}
