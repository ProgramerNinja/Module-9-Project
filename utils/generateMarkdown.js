// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var output = "";
  if (license === "MIT") {
    output = "![Badge License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)";
  } else  if (license === "GNU") {
    output = "![Badge License](https://img.shields.io/badge/License-GPL3-015d93.svg?style=for-the-badge&labelColor=blue)";
  } else  if (license === "Apache") {
    output = "![Badge License](https://img.shields.io/badge/License-Apache_2.0-961b1f?style=for-the-badge&labelColor=D22128)";
  }

  return output
}

function renderOptioanlBadge(badge) {
  var output = "";
  if (badge === "Always Learning") {
    output = "![Static Badge](https://img.shields.io/badge/Always%20Learning-grey?labelColor=aqua&color=blue)"
  } else  if (badge === "badmath") {
    output = "![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)";
  }

  return output
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var output = "";
  if (license === "MIT") {
    output = "https://opensource.org/license/mit/";
  } else  if (license === "GNU") {
    output = "https://www.gnu.org/licenses/gpl-3.0.en.html";
  } else  if (license === "Apache") {
    output = "https://www.apache.org/licenses/LICENSE-2.0";
  }

  return output
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  output = `This project is being covered under the ${license}`
  return output
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)} ${renderLicenseLink(data.license)}

  ## Description

  - Motivation: ${data.motivation}
  - Problem solved: ${data.problem}
  - What was learned: ${data.learnings}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation

  - ${data.installationSteps}

  ## Usage

  - ${data.usageinstructions}
  - the link to the deplyed version can be found here -> ${data.deployedlink}

      ![alt text](${data.screenshot})

  ## Credits

  - ${data.credit}

  ## License

  - ${renderLicenseSection(data.license)}

  ### A list of available licenses can be found here: [https://choosealicense.com/](https://choosealicense.com/)

  ## Badges

  ${renderOptioanlBadge(data.badge)}
  
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
