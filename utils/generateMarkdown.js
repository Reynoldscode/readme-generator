
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license); // Get the license badge
  const licenseLink = renderLicenseLink(data.license); // Get the license link
  
  return `${licenseBadge}
# ${data.title}

# Table of Contents

* [Introduction](#introduction)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Introduction
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Tests
${data.test}

## License
${renderLicenseSection(data.license)}

## Questions
For any questions about the project, feel free to reach out to me via:
- GitHub: [${data["Github-Account"]}](https://github.com/${data["Github-Account"]})
- Email: ${data.Email}
`;
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "GNU General Public License v3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "Apache License 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "GNU General Public License v3.0":
      return "[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)";
    case "Apache License 2.0":
      return "[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)";
    case "MIT License":
      return "[MIT License](https://opensource.org/licenses/MIT)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  return `## License
This application is licensed under the ${license} license. ${renderLicenseBadge(license)}
`;
}

module.exports = generateMarkdown;