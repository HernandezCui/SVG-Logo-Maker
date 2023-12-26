const { Triangle, Circle, Square } = require('./shapes.js'); 


// testing for triangle to render with a blue background
describe('Triangle test', () => {
    test('test for user choice of text, text color, and shape color', () => {
        const shape = new Triangle('blue', 'CBD', 'black');
        expect(shape.render()).toEqual(
        `<svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="blue"/>
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="black">CBD</text>
        </svg>`
        );
    });
});

// testing for square to render with a purple background 
describe("Square test", () => {
    test('test for user choice of text, text color, and shape color', () => {
        const shape = new Square('green', 'TRD', 'white');
        expect(shape.render()).toEqual(
        `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="green"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="white">TRD</text>
        </svg>`
        );
    });
});

// testing for circle to render with a blue background
describe('Circle test', () => {
    test('test for user choice of text, text color, and shape color', () => {
        const shape = new Circle('red', 'EMP', 'yellow');
        expect(shape.render()).toEqual(
        `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="red" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="yellow">EMP</text>
        </svg>`
        );
    });
});