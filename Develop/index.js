// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [{
              type: 'input',
              name: 'title',
              message: 'What is the title of your project?'
            },
            {
              type: 'input',
              name: 'description',
              message: 'Please enter a brief description of your project:'
            },
            {
              type: 'input',
              name: 'installation',
              message: 'Please enter the installation instructions for your project:'
            },
            {
              type: 'input',
              name: 'usage',
              message: 'Please enter the usage information for your project:'
            },
            {
              type: 'list',
              name: 'license',
              message: 'Please choose a license for your application:',
              choices: ["MIT", "BSD 3", "APACHE 2.0", "GPL 3.0", "None"]
            },
            {
              type: 'input',
              name: 'contribution',
              message: 'Please enter the contribution guidelines for your project:'
            },
            {
              type: 'input',
              name: 'tests',
              message: 'Please enter the test instructions for your project:'
            },
            {
              type: 'input',
              name: 'github',
              message: 'Please enter your GitHub username:'
            },
            {
              type: 'input',
              name: 'email',
              message: 'Please enter your email address:'
            }
          
];

// TODO: Create a function to write README file
function writeFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('README.md file created!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(userResponse) {
            console.log(userResponse)
            writeFile("README.md", genMarkdown(userResponse));
        });
    };

// Function call to initialize app
init();
