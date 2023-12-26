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



// function that writes the svg file using user answers
// function writeToFile(fileName, answers) {
//     let svgString = "";
//     svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
//     svgString += '<g>';
//     svgString += '${answers.shape}';


// // match users response to shape class to make new shapes
//     let setShape;
//     if (answers.shape === "Triangle") {
//         setShape = new Triangle();
//         svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}" />`;
//     } else if (answers.shape === "Square") {
//         setShape = new Square();
//         svgString += `<rect width="200" height="200" fill="${answers.shapeBackgroundColor}" />`;
//     } else {
//         setShape = new Circle();
//         svgString += `<circle cx="150" cy="100" r="100" fill="${answers.shapeBackgroundColor}" />`;
//     }

// // text tag for text alignment, color, and font size 
//     svgString += `<text x="100" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
//     svgString += "</g>";
//     svgString += "</svg>";

// // genrating svg file using the file system 
//     fs.writeFile(fileName, svgString, (err) => {
//         err ? console.log(err) : console.log("Generated logo.svg");
//     });
// }
