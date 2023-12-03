const i = require('fs').readFileSync('../input/2022/3', "utf8").split('\r\n\r\n').map(e => e.split('\r\n'));
let containers = i[0].filter(e => e.length);

const containerPrio = [...containers
    .map(e => splitContent(e))
    .map(e => (getPriorityItem(e)))
    .map(e => getPriorityValue(e))];

function splitContent(container) {
    return [container.slice(0, container.length/2), container.slice(container.length/2)]
}

function getPriorityItem(container) {
    return container.reduce((acc, cur) => {
        if (!acc) return cur;
        else {
            const intersect = cur.split('').filter(e => acc.split('').includes(e));
            return intersect.join('');
        }
    });
}

function getPriorityValue(item) {
    const value = item.charCodeAt(0);
    return value > 96 ? value - 96 : value - 38;
}

let sacks = [];
let sack = []
containers.forEach((container) => {
    sack.push(container);
    if (sack.length === 3) {
        sacks.push(sack);
        sack = [];
    }
})

sacks = sacks.map(e => getPriorityItem(e))
    .map(e => getPriorityValue(e));

console.log('Part 1:');
console.log(containerPrio.reduce((acc, cur) => acc + +cur));

console.log('Part 2:');
console.log(sacks.reduce((acc, cur) => acc + cur));
