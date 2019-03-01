const fs = require('fs');
let rawCoordinates = fs.readFileSync('../input/2018/day6','utf8').split('\r\n'),
coordinates = [], matrix, max = 0, infiniteSpacesList = [];

rawCoordinates.forEach((tuple, i) => {
  if(tuple)
    coordinates.push({point: i.toString(), x: +tuple.split(',')[0], y: +tuple.split(',')[1]});
})

coordinates.forEach(coord => {
  max = max <= coord.x ? coord.x : max;
  max = max <= coord.y ? coord.y : max;
})

matrix = [];

for(let i = 0; i < max+1 ; i++) {
  matrix.push(new Array(max+1).fill('.'))
}

coordinates.forEach(coord => {
  matrix[coord.y][coord.x] = coord.point;
})

let safeZone = 0;
for(let i = 0; i < matrix.length; i++) {
  for(let j = 0; j < matrix[i].length; j++) {
    if(isInSafeDistance(i,j)) {
      safeZone++;
    }
  }
}

console.log("Safe zone length "+ safeZone);

function isInSafeDistance(i,j){
  let sum = 0;
  coordinates.forEach(elm => {
    sum += Math.abs(j - elm.x) + Math.abs(i - elm.y);
  });
  // console.log(sum);
  if(sum < 10000) {
    return true;
  }
  return false;
}
