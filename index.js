const inquirer = require("inquirer");
const fs = require("fs");

const questions = require("./utils/questions");
const api = require("./utils/api");
const markdown = require("./utils/generateMarkdown");
const makeLicense = require("./utils/license");

async function init() {
  const info = await inquirer.prompt(questions);
  const apiInfo = await api.getUser(info.username);
  console.log(apiInfo.data);
  fs.writeFile(
    "README.md",
    markdown(
      info,
      makeLicense(info),
      apiInfo.data.avatar_url,
      apiInfo.data.html_url,
      apiInfo.data.email
    ),
    function(err) {
      if (err) return err;
    }
  );
}

init();

// function writeToFile(fileName, data) {}

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
