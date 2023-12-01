/*
    Day 1 : No Time for a Taxicab
    Status : DONE (1/1)
 */

const fs = require("fs");
const input = (fs.readFileSync('input/2016/day1','utf8')).split(", ");

var coords = [0,0];
var direction = '↑';
var locations = [];

// PART 1
input.forEach(function (e) {
    var a;
    if (e.charAt(0) == "R"){
        switch (direction){
            case '↑':
                direction = '→';
                for(var i=0;i<parseInt(e.replace(/R|L/g, ""));i++){
                    coords[0]++;
                    a = coords.slice();
                    locations.push(a);
                    
                }
                break;
            case '→':
                direction = '↓';
                for(i=0;i<parseInt(e.replace(/R|L/g, ""));i++){
                    coords[1]--;
                    a = coords.slice();
                    locations.push(a);
                    
                }
                break;
            case '↓':
                direction = '←';
                for(i=0;i<parseInt(e.replace(/R|L/g, ""));i++){
                    coords[0]--;
                    a = coords.slice();
                    locations.push(a);
                }
                break;
            case '←':
                direction = '↑';
                for(i=0;i<parseInt(e.replace(/R|L/g, ""));i++){
                    coords[1]++;
                    a = coords.slice();
                    locations.push(a);
                }
                break;
        }
    } else {
        switch (direction){
            case '↑':
                direction = '←';
                for(i=0;i<parseInt(e.replace(/R|L/g, ""));i++){
                    coords[0]--;
                    a = coords.slice();
                    locations.push(a);
                }
                break;
            case '→':
                direction = '↑';
                for(i=0;i<parseInt(e.replace(/R|L/g, ""));i++){
                    coords[1]++;
                    a = coords.slice();
                    locations.push(a);
                }
                break;
            case '↓':
                direction = '→';
                for(i=0;i<parseInt(e.replace(/R|L/g, ""));i++){
                    coords[0]++;
                    a = coords.slice();
                    locations.push(a);
                }
                break;
            case '←':
                direction = '↓';
                for(i=0;i<parseInt(e.replace(/R|L/g, ""));i++){
                    coords[1]--;
                    a = coords.slice();
                    locations.push(a);
                }
                break;
        }
    }
});
console.log("Answer is : "+ (coords[0]+coords[1]));
console.log("First location visited twice is at : "+ doubleLocation(locations));

function doubleLocation(array) {
    for(var i=0; i < array.length; i++){
        for(var j=0; j < array.length; j++){
            if(array[i][0]==array[j][0] && array[i][1]==array[j][1] && i!=j){
                return array[i][0] + array[i][1];
            }
        }
    }
}
