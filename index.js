const inquirer = require("inquirer");
const fs = require("fs");

const questions = require("./utils/questions");
const api = require("./utils/api");
const markdown = require("./utils/generateMarkdown");
const makeLicense = require("./utils/license");

function writeToFile(fileName, data) {}

// function init() {
//   inquirer.prompt(questions).then(function(information) {
//     console.log(api.getUser(information.username));
//     fs.writeFile(
//       "README.md",
//       markdown(
//         information,
//         makeLicense(information),
//         api.getUser(information.username)
//       ),
//       function(err) {
//         if (err) return err;
//       }
//     );
//   });
// }

async function init() {
  const info = await inquirer.prompt(questions);
  const apiInfo = await api.getUser(info.username);
  console.log(apiInfo.data.html_url);
  fs.writeFile(
    "README.md",
    markdown(
      info,
      makeLicense(info),
      apiInfo.data.html_url,
      apiInfo.data.email
    ),
    function(err) {
      if (err) return err;
    }
  );
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
