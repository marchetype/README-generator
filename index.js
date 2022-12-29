// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
//let readmeArr = [];

// function Section(title, prompt) {
//     this.title = title;
//     this.prompt = prompt;
// }

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'what is your name?',
        name: 'dev_name'
    },
    {
        type: 'input',
        message: "What is your project's title?",
        name:'title',
    },
    {
        type: 'input',
        message: 'Please describe your project and its functionality:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please explain the installation process for your application:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please enter usage instruction about your application:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please enter the guidelines for conribution to the project:',
        name: 'contribution_guidelines',
    },
    {
        type: 'input',
        message: 'Please enter instructions for testing:',
        name: 'testing',
    },
    {
        type: 'checkbox',
        message: 'What type of license does your project have?',
        name: 'license',
        choices: ['Apache_2.0', 'Boost_1.0', 'BSD_3--Clause', 'BSD_2--Clause', 'EPL_1.0', 'GPLv3', 'CC0-1.0', 'EPL_1.0', 'GPLv3', 'Unlicense']
    },
];



// Section.prototype.gatherInput = function () {
//     inquirer.prompt([
//     {
//         name: `${this.title}`,
//         message:`${this.prompt}`,
//         type: 'input'
//     }
//     ])
//     .then(function(textInput)
//     {
//         readmeArr.push(description.title)
//         console.log(textInput);
//         readmeArr.push(textInput);
//         console.log(readmeArr);
//     });
// }

// TODO: Create a function to write README file
//function writeToFile(fileName, data)

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
    
    console.log('README file has been created.');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (response) {
        writeToFile("README.md", generateMarkdown(response))
    })
}

// Function call to initialize app
init();
