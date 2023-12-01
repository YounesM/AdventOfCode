/*
    Day 1: Bathroom Security
    Status : DONE
 */

process.stdin.on('data', function (input) {
    // PART 1 Grid
    // var grid = [
    //     [1,1,3],
    //     [4,5,6],
    //     [7,8,9]
    // ];
    // PART 1 Grid
    var grid = [
        ["x","x","1","x","x"],
        ["x","1","3","4","x"],
        ["5","6","7","8","9"],
        ["x","A","B","C","x"],
        ["x","x","D","x","x"]
    ];
    var prev = [2,0];
    var res = 0;
    var line = input.split("\n");

    line.forEach(function(e){
        for(var i=0; i<e.length ; i++){
            if(e[i]=="L"){
                if(grid[prev[0]] && grid[prev[0]][prev[1]-1] && grid[prev[0]][prev[1]-1] != "x"){
                    res = grid[prev[0]][prev[1]-1];
                    prev[1] -= 1;
                }
            }
            if(e[i]=="U"){
                if(grid[prev[0]-1] && grid[prev[0]-1][prev[1]] && grid[prev[0]-1][prev[1]] != "x"){
                    res = grid[prev[0]-1][prev[1]];
                    prev[0] -= 1;
                }
            }
            if(e[i]=="D"){
                if(grid[prev[0]+1] && grid[prev[0]+1][prev[1]] && grid[prev[0]+1][prev[1]] != "x"){
                    res = grid[prev[0]+1][prev[1]];
                    prev[0] += 1;
                }
            }
            if(e[i]=="R"){
                if(grid[prev[0]] && grid[prev[0]][prev[1]+1] && grid[prev[0]][prev[1]+1] != "x"){
                    res = grid[prev[0]][prev[1]+1];
                    prev[1] += 1;
                }
            }
        }
        console.log(res);
    });
});
