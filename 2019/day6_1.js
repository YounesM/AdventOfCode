// --- Day 6: Universal Orbit Map --- (PART 1)
const fs = require('fs'), input = fs.readFileSync('../input/2019/day6', 'utf8')
    .trim().split('\r\n').map(e => {return {planet: e.split(')')[0], orbits: e.split(')')[1]}});
let checksum = 0;
input.forEach(el => {
    getOrbitCount(el);
})
console.log(checksum);

function getOrbitCount(val) {
    const foundPlanet = input.find(e => e.planet === val.orbits)
    if (foundPlanet) {
        getOrbitCount(foundPlanet);
    }
    checksum++;
}

