const { Triangle, Circle, Square } = require('./shapes.js'); 


// testing for triangle to render with a blue background
describe('Triangle test', () => {
    test('test for a triangle with blue background', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toEqual(
            '<polygon points="100, 15 200, 200 0, 200" fill="${this.color}" />'
        );
    });
});

// testing for square to render with a purple background 
descr