class Figure {
    #x;
    #y;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }

    square() {
        return undefined;
    }
}

class Circle extends Figure {
    constructor(x, y, r) {
        super(x, y);
        this.r = r;
    }

    square() {
        return Math.PI * this.r * this.r;
    }
}

class Rectangle extends Figure {
    constructor(x, y, h, w) {
        super(x, y);
        this.h = h;
        this.w = w;
    }

    square() {
        return this.h * this.w;
    }
}


const circle = new Circle(10, 20, 5);
console.log(`Circle center: (${circle.x}, ${circle.y}), radius: ${circle.r}, area: ${circle.square()}`);

const rectangle = new Rectangle(0, 0, 10, 20);
console.log(`Rectangle center: (${rectangle.x}, ${rectangle.y}), height: ${rectangle.h}, width: ${rectangle.w}, area: ${rectangle.square()}`);

const figure = new Figure(5, 5)
console.log(`Figure center: (${figure.x}, ${figure.y}), area: ${figure.square()}`)