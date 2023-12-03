const i = require('fs').readFileSync('../input/2022/2', "utf8").split('\r\n\r\n').map(e => e.split('\r\n'));
let games = i[0].filter(e => e.length);
const symbols = [
    {symbol: ['A', 'X'], value: 1, win: ['C', 'Z']},
    {symbol: ['B', 'Y'], value: 2, win: ['A', 'X']},
    {symbol: ['C', 'Z'], value: 3, win: ['B', 'Y']}
]

console.log("Part 1:");
console.log(games.reduce((acc, game) => {
    const P2 = game.split(' ')[1];
    const P1 = game.split(' ')[0];
    const played = symbols.find(e => e.symbol.includes(P2));

    if (played.win.includes(P1)) {
        // This is a win
        return acc + 6 + played.value;
    } else if (played.symbol.includes(P1)) {
        // This is a draw
        return acc + 3 + played.value;
    } else {
        // This is a loss
        return acc + played.value;
    }
}, 0));

console.log("Part 2:");
console.log(games.reduce((acc, game) => {
    const P2 = game.split(' ')[1];
    const P1 = game.split(' ')[0];
    let played;

    // This is a loss
    if(P2 === 'X') {
        played = symbols.find(e => !e.symbol.includes(P1) && !e.win.includes(P1));
        return acc + played.value;
    } else if (P2 === 'Y') {
        played = symbols.find(e => e.symbol.includes(P1));
        return acc + 3 + played.value;
    } else {
        played = symbols.find(e => e.win.includes(P1));
        return acc + 6 + played.value;
    }

}, 0));
