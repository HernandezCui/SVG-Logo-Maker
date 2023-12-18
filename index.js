const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

function writeFile (fileName, answers) {
    let svgString = ""; 
    svgString = '<svg width="5cm" height="4cm" version="1.1" xmlns="http://www.w3.org/2000/svg">'
    svgString += "<g>";
    svgString += `${answers.shape}`;

    
}