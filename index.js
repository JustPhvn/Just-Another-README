const inquirer = require("inquirer");
const fs = require("fs");

const questions = require("./utils/questions");
const api = require("./utils/api");
const markdown = require("./utils/generateMarkdown");
const makeLicense = require("./utils/license");

function writeToFile(fileName, data) {}

function init() {
  inquirer.prompt(questions).then(function(information) {
    // api.getUser(information.username);
    console.log(makeLicense(information));
    fs.writeFile(
      information.repo + "_README.md",
      markdown(information),
      function(err) {
        if (err) return err;
      }
    );
  });
}

init();

//At least one badge
// Project title
// Description
// Table of Contents
// Installation
// Usage
// License
// Contributing
// Tests
// Questions
// User GitHub profile picture
// User GitHub email
