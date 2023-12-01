/*
	Day 6: Signals and Noise
	Status : DONE
*/

const fs = require("fs");
const input = fs.readFileSync('input/2016/day6','utf8');

const lines = input.split('\n');
var alpha = [];
var ans = "";

for(var i=0; i < 8; i++){
	lines.forEach(function(e) {
		if(alpha[e.charAt(i)]){
			alpha[e.charAt(i)]++;
		} else {
			alpha[e.charAt(i)] = 1;
		}
	});
	
	var sortable = [];
	for(var char in alpha){
		sortable.push([char, alpha[char]]);
	}

	sortable.sort(function(a,b) {
		// PART 1
		// return b[1] - a[1];
		
		// PART 1
		return a[1] - b[1];		
	});
	ans += sortable[0][0];
	alpha = [];
}
console.log(ans);
