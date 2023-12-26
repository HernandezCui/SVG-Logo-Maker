const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle } = require('./lib/shapes.js');
const fileName = "./examples/logo.svg";


// function to create new logo svg using file system
function generateLogo(response) {
    let userShape;

    if (response.shape === 'Triangle') {
        userShape = new Triangle(response.shapeColor, response.text, response.textColor);
    } else if (response.shape === 'Square') {
        userShape = new Square(response.shapeColor, response.text, response.textColor);
    } else {
        userShape = new Circle(response.shapeColor, response.text, response.textColor);
    }

    const svg = userShape.render();
    fs.writeFile(fileName, svg, () => console.log('Generated logo.svg'));  
}
     

// function for user to answer questions in their command line 
function promptUser() {
    inquirer
    .prompt([
        // text prompt
        {  
            type: "input", 
            message: "What text would you like to display on your logo? (Maximum of three Characters)", 
            name: "text", 
        },
        // text color 
        {
            type: "input",
            message: "What color do you want your text to be? (Enter color keyword or hexadecimal number)", 
            name: "textColor",
        },
        // Shape Choice
        {
            type: "list", 
            message: "what shape would you like your logo to render?",
            choices: ["Triangle", "Square", "Circle"],
            name: "shape",
        },
        // Shape color
        {
            type: "input",
            message: "What color would you like your shape to be? (Enter color keyword or hexadecimal number)",
            name: "shapeColor",
        },
    ])
   .then((response) => {
        generateLogo(response);
    })
    .catch(err => {
        console.log(err);
    });
}

// call promptUser 
promptUser(); 