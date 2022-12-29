// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
let readmeArr = [];

function Section(title, prompt) {
    this.title = title;
    this.prompt = prompt;
}

let description = new Section('Description', 'Please describe your project and its functionality:');
const install = new Section('Installation', 'Please explain the installation process for your application:');
const usage = new Section('Usage', 'Please enter usage information about your application:');
const contribution = new Section('Contribution Guidelines', 'Please enter the guidelines for conribution to the project:');
const test = new Section('Test Instructions', 'Please enter instructions for testing:');
// TODO: Create an array of questions for user input
const stringInputQuestions = [description,];

function gatherInput() {
    inquirer.prompt([
    {
        name: ``,
        message:``,
        type: 'input'
    }
    ])
    .then(function(textInput)
    {
        readmeArr.push(description.title)
        console.log(textInput);
        readmeArr.push(textInput);
        console.log(readmeArr);
    });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
}

// TODO: Create a function to initialize app
function init() {
    gatherInput();
}

// Function call to initialize app
init();
