/*
	Day 4: Security Through Obscurity
	Status : SOLVING (1/2)
*/

var fs = require("fs");
var input = fs.readFileSync("input/day4", "utf8");

var lines = input.split("\n");
var res = 0;

//PART 1

lines.forEach(function(e) {
	var code = e.match(/\[(.*?)\]/g);
	var num = e.match(/[0-9]+/g);
	var str = e.replace(/\[(.*?)\]|[0-9]+|-/g,"");
	var obj = {};
	var sortable = [];
	
	code = code[0].replace(/\[|\]/g,"");
	num = num[0];

	for(var i=0;i<str.length;i++){
		var al = str.charAt(i);
		if(obj[al]){
			obj[al]++;
		} else {
			obj[al]=1;
		}
	}

	for(var nb in obj){
		sortable.push([nb, obj[nb]]);
	}

	sortable.sort(function(a, b) {
	    if((a[1] - b[1]) !== 0){
	    	return b[1] - a [1];
	    }
	    return a[0].charCodeAt(0) - b[0].charCodeAt(0);			
	})
	
	var flag = true;

	for(var i=0; i < code.length; i++){
		if(sortable[i][0] != code.charAt(i)){
			flag = false;
		}
	}

	if(flag){
		res += parseInt(num);
	}
})

console.log(res);