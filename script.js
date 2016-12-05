/**
 * Created by youne on 04/12/2016.
 */

//ADVENT OF CODE DAY 1 (FAILED)
process.stdin.on('data', function (input) {
    var coords = [0,0];
    var axis = true;
    var direction = true;
    var previous = "";
    var lines = input.split(",");

    lines.forEach(function(e){
        var str = e.replace(" ","")
        if(str.charAt(0) === "R"){
            str = str.replace("R","");
            axis = !axis;
            if(previous == "R"){
                direction = !direction;
            }
            if(direction && axis){
                coords[1] -= parseInt(str);
            }
            if(direction && !axis){
                coords[0] += parseInt(str);
            }
            if(!direction && !axis){
                coords[0] -= parseInt(str);
            }
            if(!direction && axis){
                coords[1] += parseInt(str);
            }
        } else {
            str = str.replace("L","");
            axis = !axis;
            if(previous == "L"){
                direction = !direction;
            }
            if(direction && axis){
                coords[1] += parseInt(str);
            }
            if(direction && !axis){
                coords[0] -= parseInt(str);
            }
            if(!direction && !axis){
                coords[0] += parseInt(str);
            }
            if(!direction && axis){
                coords[1] -= parseInt(str);
            }
        }
    });
    console.log(coords);
    console.log(83+166)
});

//ADVENT OF CODE DAY 2 (SUCCEEDED)
process.stdin.on('data', function (input) {
    var grid = [
        ["x","x","1","x","x"],
        ["x","2","3","4","x"],
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

//ADVENT OF CODE DAY 3 (SUCCEEDED)
//PART 1
process.stdin.on('data', function (input) {
    var res = 0;
    var lines = input.split('\n');
    lines.forEach(function(e){
        var tri = e.split(" ");
        tri = tri.sort(sortNum);
        if(parseInt(tri[0]) < parseInt(tri[1])+parseInt(tri[2])){
            res++;
        }
    });
    console.log(res);
});
//PART 2
process.stdin.on('data', function (input) {
    var res = 0;
    var lines = input.split('\n');
    var l = [];
    var tri = [];
    lines.forEach(function(e){
        l.push(e.split(" "));
    });
    for(var i=0; i < l.length; i+=3){
        for(var j=0; j < 3; j++){
            tri.push([l[i][j],l[i+1][j],l[i+2][j]]);
        }
    }
    tri.forEach(function(e){
        var tr = e.sort(sortNum);
        if(parseInt(tr[0]) < parseInt(tr[1])+parseInt(tr[2])){
            res++;
        }
    });
    console.log(res);
});
function sortNum(a,b){
    return b - a;
}

//ADVENT OF CODE DAY 4