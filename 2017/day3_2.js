// --- Day 3: Spiral Memory (1/2) INCOMPLETE---
let input = 361527, square_size = Math.ceil(Math.sqrt(input));
square_size = square_size % 2 ? square_size : square_size + 1;

class SquareBuilder {
    constructor(input) {
        this.memory = new Array(square_size).fill().map(() => new Array(square_size).fill(0));
        this.x = (square_size - 1) / 2;
        this.y = (square_size - 1) / 2;
        this.memory[this.x][this.y] = 1;
        this.step = 0;
        this.previousStep = 0;
        this.input = input;
    }

    goLeft(input) {
        let maxVar = this.y - this.previousStep - this.step;
        while (this.y > maxVar-1 && this.memory[this.x][this.y] < input) {
            this.y--;
            this.memory[this.x][this.y] = this.getValue();
        }
        if (this.memory[this.x][this.y] < input) {
            this.goBottom(input);
        } else {
            console.log(this.memory[this.x][this.y])
        }
    }

    go(input) {
        let maxVar = this.y + this.previousStep + this.step;
        while (this.y <= maxVar && this.memory[this.x][this.y] < input) {
            if (this.y === maxVar) {
                this.previousStep = this.step++;
            }
            this.y++;
            this.memory[this.x][this.y] = this.getValue();
        }
        if (this.memory[this.x][this.y] < input) {
            this.goTop(input);
        } else {
            console.log(this.memory[this.x][this.y])
        }
    }

    goRight(input) {
        let maxVar = this.y + this.previousStep + this.step;
        while (this.y <= maxVar + 1 && this.memory[this.x][this.y] < input) {
            if (this.y === maxVar) {
                this.previousStep = this.step++;
            }
            this.y++;
            this.memory[this.x][this.y] = this.getValue();
        }
        if (this.memory[this.x][this.y] < input) {
            this.goTop(input);
        } else {
            console.log(this.memory[this.x][this.y])
        }
    }

    goTop(input) {
        let maxVar = this.x - this.previousStep - this.step;
        while (this.x > maxVar && this.memory[this.x][this.y] < input) {
            this.x--;
            this.memory[this.x][this.y] = this.getValue();
        }
        if (this.memory[this.x][this.y] < input) {
            this.goLeft(input);
        } else {
            console.log(this.memory[this.x][this.y])
        }
    }

    goBottom(input) {
        let maxVar = this.x + this.previousStep + this.step;
        while (this.x < maxVar+1 && this.memory[this.x][this.y] < input) {
            this.x++;
            this.memory[this.x][this.y] = this.getValue();
        }
        if (this.memory[this.x][this.y] < input) {
            this.goRight(input);
        } else {
            console.log(this.memory[this.x][this.y])
        }
    }

    getValue() {
        return this.memory[this.x - 1][this.y - 1] + this.memory[this.x][this.y - 1] + this.memory[this.x + 1][this.y - 1]
            + this.memory[this.x - 1][this.y] + this.memory[this.x + 1][this.y]
            + this.memory[this.x - 1][this.y + 1] + this.memory[this.x][this.y + 1] + this.memory[this.x + 1][this.y + 1]
    }
}
let builder = new SquareBuilder(input);
builder.go(input);