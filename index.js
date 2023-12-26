const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');


// function that writes the svg file using user answers
function writeToFile(filename, answers) {
    let svgString = "";
    svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgString += '<g>';
    svgString += '${answers.shape}';
}