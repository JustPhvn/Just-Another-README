function generateMarkdown(data) {
  return `
# ${data.repo} 
${data.license}
![GitHub](https://img.shields.io/github/license/${data.username}/${data.repo})
# Description
${data.description}
# Table of Contents
* [Installation] (#installation)
* [Usage] (#usage)
* [License] (#license)
* [Contributing] (#contributing)
* [Tests] (#tests)
* [Questions] (#questions)
# Installation 
To install dependencies run: 
````
${data.dependency}
````
# Usage 
 ${data.license}.
# License 
This project is licensed under ${data.license}
# Contributing 
${data.contribution}
# Tests 
To run tests: 
````
${data.test}
````
# Questions 
`;
}

module.exports = generateMarkdown;
