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

for(let i = 0; i < matrix.length; i++) {
  for(let j = 0; j < matrix[i].length; j++) {
    if(!matrix[i][j].match(/^\d.*$/)) {
      matrix[i][j] = getClosestPoint(i,j);
    }
  }
}

getInfiniteSpaces();
console.log(infiniteSpacesList);
console.log(getMaxLength());



for(let i = 0; i < matrix.length; i++) {
  for(let j = 0; j < matrix[i].length; j++) {
    if(!matrix[i][j].match(/\./gm)) {
      matrix[i][j] = getClosestPoint(i,j);
    }
  }
}

function getMaxLength() {
  let max = 0;
  coordinates.forEach(coord => {
    let cpt = 0;
    for(let i = 0; i < matrix.length; i++) {
      for(let j = 0; j < matrix[i].length; j++) {
        if(!matrix[i][j].match(/\./gm)
          && !infiniteSpacesList.includes(coord.point)
          && matrix[i][j].toString() === coord.point) {
          cpt++;
        }
      }
    }
    max = max < cpt ? cpt : max;
  });

  return max;
}

function getClosestPoint(i,j) {
  let min, minCoord;
  // console.log("i : "+ i + " j: " + j);
  coordinates.forEach(point => {
    let dist = Math.abs(j - point.x) + Math.abs(i - point.y);
    if(min) {
      if(min > dist) {
        min = dist;
        minCoord = point.point;
      } else if(min === dist) {
        // console.log('Equality');
        minCoord = '.';
      }
    } else {
      min = dist;
      minCoord = point.point;
    }
  });
  // printMatrix();
  return minCoord;
}

function getInfiniteSpaces() {
  //Top line
  matrix[0].forEach( el => {
    if(!infiniteSpacesList.includes(el) && el !== '.') {
      infiniteSpacesList.push(el);
    }
  });
  //Last line
  matrix[matrix[0].length - 1].forEach( el => {
    if(!infiniteSpacesList.includes(el) && el !== '.') {
      infiniteSpacesList.push(el);
    }
  });
  //First and last row
  matrix.forEach(el => {
    if(!infiniteSpacesList.includes(el[0]) && el[0] !== '.') {
      infiniteSpacesList.push(el[0]);
    }
    if(!infiniteSpacesList.includes(el[matrix[0].length - 1]) && el[matrix[0].length - 1] !== '.') {
      infiniteSpacesList.push(el[matrix[0].length - 1]);
    }
  });
}

//This is never used
function propagatePoint() {
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] !== '.' && !matrix[i][j].match(/.*\*/gm)) {
        if(i+1 < matrix.length - 1) {
          matrix[i+1][j] = placePoint(i+1, j, matrix[i][j])
        }
        if (j-1 >= 0) {
          matrix[i][j-1] = placePoint(i, j-1, matrix[i][j])
        }
        if (i-1 >= 0) {
          matrix[i-1][j] = placePoint(i-1, j, matrix[i][j])
        }
        if (j+1 < matrix.length - 1) {
          matrix[i][j+1] = placePoint(i, j+1, matrix[i][j])
        }
      }
    }
  }
  cleanMatrix();
}

//This is never used
function placePoint(i,j, currentPoint) {
  // console.log('--------------------');
  // console.log("Selected point : " + matrix[i][j]);
  // console.log("Should be replaced by : " + currentPoint)
  if(matrix[i][j].match(/.*\*/gm)) {
    // console.log("Selected point is * number");
    return '.';
  } else if (matrix[i][j] === '.') {
    return (currentPoint + '*').replace(/\*.*/gm ,'*');
    // console.log("Selected point is point");
  } else if (matrix[i][j].match(/^\d*$/)) {
    // console.log("Selected point is number");
    return matrix[i][j];
  }
}

//This is never used (But cool function to display a matrix)
function printMatrix() {
  matrix.forEach( el => {
    console.log(el.toString().replace(/,/g, ''));
  })
  console.log('--------------------')
}

//This is never used
function cleanMatrix() {
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = matrix[i][j].replace(/\*.*/gm,'')
    }
  }
}
