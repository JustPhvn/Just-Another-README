function generateMarkdown(data, license, user, email) {
  return `# ${data.repo}
  ${license}
  # Description
  ${data.description}
  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  # Installation
  To install dependencies run:
  
        ${data.dependent}
  
  # Usage
  ${data.license}.
  # License
  This project is licensed under ${data.license}
  # Contributing
  ${data.contribution}
  # Tests
  To run tests:
  
        ${data.test}
  
  # Questions

  For any questions contact ${user} at ${email}.
  `;
}

module.exports = generateMarkdown;
