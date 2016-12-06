/*
    Day 1 : No Time for a Taxicab
    Status : DONE (1/2)
 */

const fs = require("fs");
const input = (fs.readFileSync('input/day1','utf8')).split(", ");

var coords = [0,0];
var direction = '↑';

// PART 1
input.forEach(function (e) {
    if (e.charAt(0) == "R"){
        switch (direction){
            case '↑':
                direction = '→';
                coords[0] += parseInt(e.replace(/R|L/g, ""));
                break;
            case '→':
                direction = '↓';
                coords[1] -= parseInt(e.replace(/R|L/g, ""));
                break;
            case '↓':
                direction = '←';
                coords[0] -= parseInt(e.replace(/R|L/g, ""));
                break;
            case '←':
                direction = '↑';
                coords[1] += parseInt(e.replace(/R|L/g, ""));
                break;
        }
    } else {
        switch (direction){
            case '↑':
                direction = '←';
                coords[0] -= parseInt(e.replace(/R|L/g, ""));
                break;
            case '→':
                direction = '↑';
                coords[1] += parseInt(e.replace(/R|L/g, ""));
                break;
            case '↓':
                direction = '→';
                coords[0] += parseInt(e.replace(/R|L/g, ""));
                break;
            case '←':
                direction = '↓';
                coords[1] -= parseInt(e.replace(/R|L/g, ""));
                break;
        }
    }
});
console.log("Answer is : "+ (coords[0]+coords[1]));