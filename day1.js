/*
    Day 1 : No Time for a Taxicab
    Status : FAILED
 */

process.stdin.on('data', function (input) {
    var coords = [0,0];
    var axis = true;
    var direction = true;
    var previous = "";
    var lines = input.split(",");

    lines.forEach(function(e){
        var str = e.replace(" ","");
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