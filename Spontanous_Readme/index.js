const fs = require('fs')
const inquirer = require('inquirer')

const questions = [
    {
        type: "input",
        name:"title",
        message:"Give a name for your project"

    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then
}

// Function call to initialize app
init();