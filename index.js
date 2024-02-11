// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
      type: "text",
      name: "title",
      question: "What is the title of your project?"
    },
    {
      type: "text",
      name: "description",
      question: "Describe what your project does and what problem it solves."
    },
    {
      type: "text",
      name: "motivation",
      question: "What was your motivation create this project?"
    },
    {
      type: "text",
      name: "problem",
      question: "What was the problem that you were trying to solve with this Project?"
    },
    {
      type: 'list',
      message: 'What license does your project fall under?',
      name: 'contact',
      choices: ['MIT', 'GNU', 'Apache'],
    },
    {
      type: "text",
      name: "learnings",
      question: "What did you learn?"
    },
    {
      type: "text",
      name: "features",
      question: "Are there any feature in the project you would like ot mention?"
    },
    {
      type: "text",
      name: "installationSteps",
      question: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
    },
    {
      type: "text",
      name: "usageInstructions",
      question: "Provide instructions and examples for use."
    },
    {
      type: "number",
      name: "screenshot",
      question: "What is the relative address to your screenshot?"
    },
    {
      type: "text",
      name: "features",
      question: "What features does your project have?"
    },
    {
      type: "text",
      name: "credit",
      question: "Who would you like to give credit to?"
    },
    {
      type: "text",
      name: "contribution",
      question: "How can someone contribute to your project?"
    },
    {
      type: "text",
      name: "testInstructions",
      question: "Have you written any tests for your project? If so, how can the user run them."
    },
    {
      type: "text",
      name: "userGitLink",
      question: "What is the link to your github?"
    },
    {
      type: "text",
      name: "deployedlink",
      question: "What is the link to your deployed project?"
    }
  ];


// TODO: Create a function to write README file
function writeToFile(answers) {
    const readmeContent = generateReadMe(answers);
        s.writeFile('README.md', readmeContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        console.log(answers);
        writeToFile(answers)
    })
    .catch(error => {
      console.log(error);
    })};

// Function call to initialize app
init();