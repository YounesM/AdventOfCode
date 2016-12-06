/*
     Day 5: How About a Nice Game of Chess?
     Status: DONE
 */

// PART 1
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
        if(res.length < 8){
            res += hash.charAt(5);
        }
    }
    code++;
}
console.log("Code PART 1: " + res);

//PART 2
/*
    I'm redoing the work done above here instead of simply adding lines to the PART 1's while loop
    so that PART 1 and PART 2 can become distinct.
 */

var arRes = ["","","","","","","",""];
code = 0;

while(arRes.toString().length < 15){
    hash = md5(doorID + code);
    zeros = 0;

    for(i=0 ; i < 5 ; i++){
        hash.charAt(i)=="0"?zeros++:0;
    }

    if(zeros >= 5){
        if(parseInt(hash.charAt(5)) < 8){
            if(arRes[hash.charAt(5)] == ""){
                arRes[hash.charAt(5)] = hash.charAt(6);
            }
        }
    }
    code++;
}
console.log("Code PART 2: " + arRes);