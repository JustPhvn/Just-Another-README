const inquirer = require("inquirer");
const api = require("./utils/api");

const questions = [];

function writeToFile(fileName, data) {}

function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "username",
        message: "What is your GitHub username? "
      }
      // {
      //   type: "input",
      //   name: "repo",
      //   message: "What is your project name? "
      // },
      // {
      //   type: "input",
      //   name: "description",
      //   message: "Please enter a description for your project: "
      // },
      // {
      //   type: "list",
      //   name: "license",
      //   message: "What license should your project have? ",
      //   choices: ["APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
      // },
      // {
      //   type: "input",
      //   name: "dependency",
      //   message: "What command should be run to install dependencies? "
      // },
      // {
      //   type: "input",
      //   name: "test",
      //   message: "What command should be run to run tests? "
      // },
      // {
      //   type: "input",
      //   name: "info",
      //   message: "What does the user need to know about using the repo?"
      // },
      // {
      //   type: "input",
      //   name: "contribution",
      //   message:
      //     "What does the user need to know about contributing to the repo?"
      // }
    ])
    .then(function({
      username,
      repo,
      description,
      license,
      dependency,
      test,
      info,
      contribution
    }) {
      api.getUser(username);
    });
}

init();

// `https://api.github.com/users/${username}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`;

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
