const fs = require('fs')
const inquirer = require('inquirer')

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
        message:"Give a name for your project"

    },
    {
        type: "input",
        name: "installation",
        message:"Give a name for your project"

    },
    {
        type: "input",
        name: "credit",
        message:"give a list contributors"

    },
    {
        type: "list",
        name: "license",
        message:"Select a License",
        choices: [
            "MIT",
            "Morzilla",
            "Apache 2.0",
            "GNU General Public license 3.0",
            "Boost Software 1.0"


        ]

        

    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then
}

// Function call to initialize app
init();