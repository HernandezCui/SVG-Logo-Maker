const { Triangle, Circle, Square } = require('./shapes.js'); 


// testing for triangle to render with a blue background
describe('Triangle test', () => {
    test('test for a triangle with blue background', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toEqual(
            '<polygon points="100, 15 200, 200 0, 200" fill="blue" />'
        );
    });
});

// testing for square to render with a purple background 
describe("Square test", () => {
    test('test for a square with purple background', () => {
        const shape = new Square();
        shape.setColor('purple');
        expect(shape.render()).toEqual(
            '<rect width="200" height="200" fill="purple" />'
        );
    });
});

// testing for circle to render with a blue background
describe('Circle test', () => {
    test('test for a circle with green background', () => {
        const shape = new Circle();
        shape.setColor('green');
        expect(shape.render()).toEqual(
            '<circle cx="150" cy="100" r="100" fill="green" />'
        );
    });
});