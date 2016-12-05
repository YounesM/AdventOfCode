/*
     Day 5: How About a Nice Game of Chess?
 */


// npm install blueimp-md5
var md5 = require("blueimp-md5");
var doorID = "uqwqemis";
var code = 0;
var res = "";

while(res.length < 8){
    var hash = md5(doorID + code);
    var zeros = 0;

    for(var i=0 ; i < 5 ; i++){
        hash.charAt(i)=="0"?zeros++:0;
    }

    if(zeros >= 5){
        console.log("!!!!!! FOUND !!!!!!");
        res += hash.charAt(5);
    }
    code++;
}
console.log("Code : " + res);