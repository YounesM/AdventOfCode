/*
	Day 4: Security Through Obscurity
	Status : DONE
*/

var fs = require("fs");
var input = fs.readFileSync("input/day4", "utf8");

var lines = input.split("\n");
var res = 0;
var real = [];

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
	});
	
	var flag = true;

	for( i=0; i < code.length; i++){
		if(sortable[i][0] != code.charAt(i)){
			flag = false;
		}
	}

	if(flag){
		real.push(e);
		res += parseInt(num);
	}
});

//PART 2

real.forEach(function(e) {
	num = e.match(/[0-9]+/g);
	str = e.replace(/\[(.*?)\]|[0-9]+/g, "");
	str = str.replace(/-/g," ");
	num = num[0];
	var mod = num % 26;
	var stg = "";

	for (var i = 0;i<str.length;i++){
		if(str.charAt(i) != " "){
			if(str.charCodeAt(i) + mod <= "z".charCodeAt(0)){
				stg += String.fromCharCode(str.charCodeAt(i) + mod);
			} else {
				stg += String.fromCharCode("a".charCodeAt(0) + mod - ("z".charCodeAt(0) - str.charCodeAt(i) + 1));
			}
		} else {
			stg += " ";
		}
	}

	if(stg.match(/north/g)){
		console.log("ID : "+ num);
		console.log("Enc : "+ str);
		console.log("Dec : "+ stg);
	}
});