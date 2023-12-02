const i = require('fs').readFileSync('../input/2023/2', "utf8").split('\r\n\r\n').map(e => e.split('\r\n'));
let list = i[0].filter(e => e.length);

class Game {
    constructor(input) {
        this.gameId = +input.split(':')[0].split(' ')[1];
        this.gameRounds = this.setRounds(input.split(':')[1].split(';'));
    }

    setRounds(input) {
        // 1 blue; 4 green, 5 blue; 11 red, 3 blue, 11 green; 1 red, 10 green, 4 blue; 17 red, 12 green, 7 blue; 3 blue, 19 green, 15 red
        // [{blue: 1}, {red: 3, }]
        const rounds = [];
        input.forEach(round => {
            const cubes = {red: 0, green: 0, blue: 0};
            round.split(',').forEach(color => {
                const pick = color.split(' ');
                cubes[pick[2]] += +pick[1];
            })
            rounds.push(cubes);
        })
        return rounds;
    }

    isGamePossible(input) {
        return !this.gameRounds.map(round => round.green <= input.green && round.red <= input.red && round.blue <= input.blue).includes(false);
    }

    getGamePower() {
        const minCubes = {red: 0, blue: 0, green: 0};
        this.gameRounds.forEach(round => {
            minCubes.red = Math.max(round.red, minCubes.red);
            minCubes.green = Math.max(round.green, minCubes.green);
            minCubes.blue = Math.max(round.blue, minCubes.blue);
        })
        return minCubes.green * minCubes.blue * minCubes.red
    }
}

console.log("Part 1:")
console.log(list.map(e => new Game(e)).reduce((a, c) => a + (c.isGamePossible({
    red: 12,
    blue: 14,
    green: 13
}) ? c.gameId : 0), 0));

console.log("Part 2:")
console.log(list.map(e => new Game(e)).reduce((a, c) => a + c.getGamePower(), 0));
// console.log(list);
