const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown")

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
        name: "credits",
        message:"give a list of contributors"

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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err) {
            return console.log(err);
        }
    });
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
        data.getLicense = getLicense(data.license);
        writeToFile("./exampleof/README.md", data);
    });
}

// Function call to initialize app
init();