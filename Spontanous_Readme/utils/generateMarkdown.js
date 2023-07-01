// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ''

  switch(license){
    case "Apache 2.0":
      badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "Boost Software 1.0":
      badge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case "MIT":
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    
  }
  return badge;
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = '';

  switch (license) {
    case 'Apache 2.0':
      link = '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'Boost Software 1.0':
      link = '[Boost Software 1.0](https://www.boost.org/LICENSE_1_0.txt)';
      break;
    case 'MIT':
      link = '[MIT](https://opensource.org/licenses/MIT)';
      break;
  }

  return link;
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}




function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

## Usage

## Credits

## License 
${data.license}

`;
}


module.exports = generateMarkdown;