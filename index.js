// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
// const questions = [
//     "What was your motivation?",
//     "Why did you build this project? (Note: the answer is not 'Because it was a homework assignment.')",
//     "What problem does it solve?",
//     "What did you learn?",
//     "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
//     "Provide instructions and examples for use.",
//     "How many screenshots would you like to add?",
//     "What features does your project have?",
//     "How can someone contribute to your project?",
//     "Have you written any tests for your project? If so, how can the user run them."
//   ];
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
      name: "numScreenshots",
      question: "How many screenshots would you like to add?"
    },
    {
      type: "text",
      name: "features",
      question: "What features does your project have?"
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
      name: "username",
      question: "What is your github username"
    },
    {
      type: "text",
      name: "repolink",
      question: "What is the link to your repo?"
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