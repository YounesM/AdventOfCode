const fs = require("fs");
const input = fs.readFileSync('input/day7','utf8').split('\n');
let tls = 0;
let ssl = 0;

input.forEach(e =>{
    var hypernet = e.match(/\[(.*?)\]/g);
    var hyperTLS = false;
    var aba = [];

    hasABA(e,aba);
    for(var i=0; i < hypernet.length; i++){
        var hype = hypernet[i].replace(/\]|\[/g,"");
        hasABBA(hype)?hyperTLS=true:0;
        if(hasBAB(hype,aba)){
            ssl++;
            break;
        }
    }
    hasABBA(e)&&!hyperTLS?tls++:0;
});
console.log("Part 1 :"+tls);
console.log("Part 2 :"+ssl);

// PART 1
function hasABBA(line) {
    var str = line.replace(/\[(.*?)\]/g,"-");
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

// PART 2
function hasABA(line, aba) {
    var str = line.replace(/\[(.*?)\]/g,"  ");
    for(var i=0; i < line.length - 2; i++){
        if(str[i]
            &&str[i]==str[i+2]
            &&str[i]!=str[i+1]){
            aba.push(str[i]+str[i+1]+str[i+2]);
        }
    }
    return aba.length == 0;
}
function hasBAB(line, aba){
    var bab = [];
    var flag = false;
    hasABA(line,bab);
    if(!aba.length || !bab.length)
        return false;
    else{
        aba.forEach(e =>{
            bab.forEach(el =>{
                if(e[0]==el[1]&&e[1]==el[0]){
                    flag = true;
                }
            })
        })
    }
    return flag;
}