const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username? "
  },
  {
    type: "input",
    name: "repo",
    message: "What is your project name? "
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a description for your project: "
  },
  {
    type: "list",
    name: "license",
    message: "What license should your project have? ",
    choices: ["APACHE 2.0", "GPL 3.0", "MIT", "None"]
  },
  {
    type: "input",
    name: "dependent",
    message: "What command should be run to install dependencies? "
  },
  {
    type: "input",
    name: "test",
    message: "What command should be run to run tests? "
  },
  {
    type: "input",
    name: "info",
    message: "What does the user need to know about using the repo?"
  },
  {
    type: "input",
    name: "contribution",
    message: "What does the user need to know about contributing to the repo?"
  }
];

module.exports = questions;
