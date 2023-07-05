const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        type: "input",
        name: "title",
        message:"Give a name for your project"

    },
    {
        type: "input",
        name: "description",
        message:"Give a description for your project"

    },
    {
        type: "input",
        name: "installation",
        message:"What steps are required to run this project?"

    },
    {
        type: "input",
        name: "usage",
        message:"What is the purpose of or what problem does your project solve?"

    },
    {
        type: "input",
        name: "contributors",
        message:"give a list of contributors"

    },
    {
        type: 'input',
        name: 'test',
        message: 'provide any test information.'
    },
    
    {
        type: "list",
        name: "license",
        message:"Select a License",
        choices: [
            "MIT",
            "Apache 2.0",
            "Boost Software 1.0",
            "None",


        ]  

    },
    {
        type: "input",
        name: 'github',
        message: 'Enter your GitHub username',
    
    },

    {
        type: "input",
        name: 'email',
        message: 'Enter your email',
    
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('File successfully written:', fileName);
    });
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("./ExampleREADME.md", data);
    });
}

// Function call to initialize app
init();