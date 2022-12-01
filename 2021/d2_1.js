// --- Day 2: Dive! --- (1)
console.log(
    require('fs').readFileSync('../input/2021/2', 'utf8').trim().split('\r\n')
        .reduce((a, c) => c.split(' ')[0] === 'forward' ? [a[0] + +c.split(' ')[1], a[1]] :
            c.split(' ')[0] === 'down' ? [a[0], a[1] + +c.split(' ')[1]] :
                [a[0], a[1] - +c.split(' ')[1]], [0, 0])
        .reduce((a,c) => a*c, 1)
)
