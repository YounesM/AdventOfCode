// --- Day 2: Dive! --- (2)
const fs = require('fs')
let input = fs.readFileSync('../input/2021/2', 'utf8').trim().split('\r\n')
let aim = 0
console.log(
    input.reduce((acc, current) => {
        switch (current.split(' ')[0]) {
            case 'forward':
                return [acc[0] + +current.split(' ')[1], acc[1] + aim * +current.split(' ')[1]];
            case 'down':
                aim += +current.split(' ')[1];
                return acc;
            case 'up':
                aim -= +current.split(' ')[1];
                return acc;
        }
    }, [0,0]).reduce((acc, current) => acc*current, 1)
)
