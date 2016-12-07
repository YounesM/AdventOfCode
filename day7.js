const fs = require("fs");
const input = fs.readFileSync('input/day7','utf8').split('\n');
let ans = 0;

// PART 1

input.forEach(e =>{
    var hypernet = e.match(/\[(.*?)\]/g);
    var hyperflag = false;

    hypernet.forEach(el =>{
        var hype = el.replace(/\]|\[/g,"");
        hasABBA(hype)?hyperflag=true:0;
    });
    hasABBA(e)&&!hyperflag?ans++:0;
});
console.log(ans);

function hasABBA(line) {
    var str = line.replace(/\[(.*?)\]/g,"-");
    console.log(str);
    for(var i=0; i < line.length ; i++){
        if(str[i]
            &&str[i]==str[i+3]
            &&str[i+2]==str[i+1]
            &&str[i]!=str[i+1]){
            return true;
        }
    }
    return false;
}