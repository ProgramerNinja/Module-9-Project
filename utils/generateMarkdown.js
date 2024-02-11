// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description

  - ${data.motivation}What was your motivation?
  - ${data.problem}What problem does it solve?
  - ${data.learnings}What did you learn?

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation

  - ${data.installationSteps}

  ## Usage

  - ${data.usageinstructions}
  - the link to the deplyed version can be found here -> ${deployedlink}

      ![alt text](${data.screenshot})

  ## Credits

  - ${data.credit}

  ## License

  The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  - ${selectedLicense}

  ---

  🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

  ## Badges

  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
  - ${chosenBadge}
  ## Features

  - ${data.features}

  ## How to Contribute

  - ${data.contribution}

  ## Tests

  - ${data.testInstruction}

  ##

  - Ways you can contact me for any questions: ${data.userGitLink}
`;
}

module.exports = generateMarkdown;
