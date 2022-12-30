// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let badge = `https://img.shields.io/badge/License-${data.license}-${data.color}.svg`;
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = `https://opensource.org/licenses/${license}`;
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(badge, link) {
  let section = `[![License](${badge})](${link})`;
  return section;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseSection = renderLicenseSection(
    renderLicenseBadge(data), 
    renderLicenseLink(data.license)
  );

  return `## README
  # ${data.title} / ${data.dev_name}
  ## ${licenseSection}
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  
  ## Description
  - ${data.description}
  ## Installation
  - ${data.installation}
  ## Usage
  - ${data.usage}
  ## Contribution
  - ${data.contribution_guidelines}
  ## Testing
  - ${data.testing}
  ### GitHub Username
  - ${data.github}

`;
}

module.exports = generateMarkdown;


