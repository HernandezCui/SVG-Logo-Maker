// class shape utilizes constructor
class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }


//    constructor() {
//     this.color = "";
//    }
// // shape class takes in setColor function
//    setColor(colorVar) {
//     this.color = colorVar;
//    }

};

// Triangle class inherits properties in shape class 
 class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }
    render() {
        return 
        `<svg version="1.1" 
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColor}"/>
        <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg> `
    };
 };

//  Square class inherits properties for the shape class
class Square extends Shape {
    render() {
        return `<rect width="200" height="200" fill="${this.color}" />`;
    }
}

// Circle class inherits properties for the shape class
class Circle extends Shape {
    render() {
        return  `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
    }
}

// export classes
module.exports = { Triangle, Circle, Square };

