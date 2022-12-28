// TODO: Include packages needed for this application
const fs = require('fs');

function Section(title, prompt, userInput) {
    this.title = title;
    this.prompt = prompt;
    this.userInput = userInput;
}

const description = new Section('Description', 'Please describe your project and its functionality:', '');
const install = new Section('Installation', 'Please explain the installation process for your application:', '');
const usage = new Section('Usage', 'Please enter usage information about your application:', '');
const contribution = new Section('Contribution Guidelines', 'Please enter the guidelines for conribution to the project:', '');
const testing = new Section('Test Instructions', 'Please enter instructions for testing:', '');
// TODO: Create an array of questions for user input
const questions = [description, install, usage, contribution, testing];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
