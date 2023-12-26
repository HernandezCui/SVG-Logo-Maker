const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle } = require('./lib/shapes');


// function that writes the svg file using user answers
function writeToFile(fileName, answers) {
    let svgString = "";
    svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgString += '<g>';
    svgString += '${answers.shape}';


// match users response to shape class to make new shapes
    let setShape;
    if (answers.shape === "Triangle") {
        setShape = new Triangle();
        svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}" />`;
    } else if (answers.shape === "Square") {
        setShape = new Square();
        svgString += `<rect width="200" height="200" fill="${answers.shapeBackgroundColor}" />`;
    } else {
        setShape = new Circle();
        svgString += `<circle cx="150" cy="100" r="100" fill="${answers.shapeBackgroundColor}" />`;
    }

// text tag for text alignment, color, and font size 
    svgString += `<text x="100" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
    svgString += "</g>";
    svgString += "</svg>";

// genrating svg file using the file system 
    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
    });
}

// function for user to answer questions in their command line 
function promptUser() {
    inquirer.prompt([
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
            name: "shapeBackgroundColor",
        },
    ])
    .then((answers) => {
        if (answers.text.length > 3) {
            console.log("Value must not be more than 3 characters");
            promptUser();
        } else {
            writeToFile("logo.svg", answers);
        }
    });
}

// call promptUser 
promptUser(); 