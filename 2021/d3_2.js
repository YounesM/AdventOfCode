// --- Day 3: Binary Diagnostic --- (1)
const fs = require('fs')
const input = fs.readFileSync('../input/2021/3', 'utf8').trim().split('\r\n')
const gammaFy = (input) => input.reduce((a, c) => a.map((el, i) => el + +c.split('')[i]),
    Array(input[0].length).fill(0))
    .map(el => el >= input.length / 2 ? 1 : 0)
const epsilonFy = (input) => gammaFy(input).map(el => +!+el)

const oxyGen = (input, index = 0) => {
    let comparator = gammaFy(input)
    input = input.filter(el => +el[index] === comparator[index]);
    if(input.length > 1) {
        return oxyGen(input, ++index)
    }
    return input[0]
}

const cO2 = (input, index = 0) => {
    let comparator = epsilonFy(input)
    input = input.filter(el => +el[index] === comparator[index]);
    if(input.length > 1) {
        return cO2(input, ++index)
    }
    return input[0]
}

console.log(parseInt(cO2(input), 2) * parseInt(oxyGen(input),2))
