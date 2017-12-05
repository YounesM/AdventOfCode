const fs = require("fs");
const input = fs.readFileSync('input/2016/day8','utf8').split('\n');

class TinyLCD {
    constructor(cols, rows) {
        this.rows = rows;
        this.cols = cols;

        this.display = new Array(this.rows).fill('.').map(()=>new Array(this.cols).fill('.'));
    }

    show(){
        this.display.forEach(e =>{
            console.log(e.toString().replace(/,/g, ' '));
        })
    }

    rect(a,b){
        for(var i=0; i<b; i++){
            for(var j=0; j<a; j++){
                this.display[i][j] = '#';
            }
        }
    }

    rotateRow(row, inc){
        for (var i=0; i < inc ; i++){
            this.display[row][this.cols -1 ]=='#'?this.display[row].unshift('#'):this.display[row].unshift('.');
            this.display[row].pop();
        }
    }

    rotateCol(col, inc){
        let arr = [];
        this.display.forEach((e) =>{
            arr.push(e[col]);
        });
        for (var i=0; i < inc; i++){
            arr[this.rows -1]=='#'?arr.unshift('#'):arr.unshift('.');
            arr.pop();
        }
        this.display.forEach((e, i) =>{
            e[col] = arr[i];
        });
    }

    count(){
        let count = 0;
        this.display.forEach(e =>{
            e.forEach(el =>{
                el=='#'?count++:0;
            })
        });
        return count;
    }
}

var screen = new TinyLCD(50,6);
input.forEach(e =>{
    let instr = e.split(" ");
    if (instr[0] == "rect"){
        screen.rect(parseInt(instr[1].split("x")[0]), parseInt(instr[1].split("x")[1]));
    } else {
        if(instr[1] == "row"){
            screen.rotateRow(parseInt(instr[2].replace('y=','')), parseInt(instr[4]));
        } else {
            screen.rotateCol(parseInt(instr[2].replace('x=','')), parseInt(instr[4]))
        }
    }
});

screen.show();
console.log("Pixels on : "+screen.count());