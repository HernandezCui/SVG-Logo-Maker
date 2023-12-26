const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');


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
        svgString += `<polygon points="100, 15 200, 200 0, 200" fill="${answers.shapeBackgroundColor}" />`;
    } else if (answers.shape === "Square") {
        setShape = new Square();
        svgString += `<rect width="200" height="200" fill="${answers.shapeBackgroundColor}" />`;
    } else {
        setShape = new Circle();
        svgString += `<circle cx="150" cy="100" r="100" fill="${answers.shapeBackgroundColor}" />`;
    }

// text tag for text alignment, color, and font size 
    svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
    svgString += "</g>";
    svgString += "</svg>";

// genrating svg file using the file system 
    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
    });
}