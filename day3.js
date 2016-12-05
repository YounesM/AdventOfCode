/*
    Day 3: Squares With Three Sides
    Status : SUCCEEDED
 */

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