// class shape utilizes constructor
class Shape {
   constructor() {
    this.color = "";
   }
// shape class takes in setColor function
   setColor(colorVar) {
    this.color = colorVar;
   }

}

// Triangle class inherits properties in shape class 
 class Triangle extends Shape {
    render() {
        return `<polygon points="100, 15 200, 200 0, 200" fill="${this.color}" />`;
    }
 }

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
module.exports = { Triangle, Square, Circle };

