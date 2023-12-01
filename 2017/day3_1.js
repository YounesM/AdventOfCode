// --- Day 3: Spiral Memory (1/1) ---
let input = 361527, square_size = Math.ceil(Math.sqrt(input)), start_point;
square_size = square_size % 2 ? square_size : square_size + 1;
start_point = Math.pow(square_size, 2) - ((square_size - 1) * 4 - 1);
for (let i = start_point - 1; i <= Math.pow(square_size, 2); i += (square_size - 1)) {
    if (input <= i) {
        console.log(Math.abs(input - (i - ((square_size - 1) / 2))) + (square_size - 1) / 2);
        break;
    }
}
