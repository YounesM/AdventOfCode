// --- Day 3: Spiral Memory (1/2) INCOMPLETE---
let input = 1024, square_size = Math.ceil(Math.sqrt(input)), start_point;
square_size = square_size % 2 ? square_size : square_size + 1;
start_point = Math.pow(square_size,2) - (square_size*4 -1);
for(let i = start_point; i < Math.pow(square_size,2); i += square_size-1/2){
    if(input > i)
        console.log(input - i);
}