const fs = require("fs");

let licenseType;
function license(license) {
  switch (license.license) {
    case "MIT":
      return (licenseType =
        "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)");
      break;
    case "APACHE 2.0":
      return (licenseType =
        "[![APACHE 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0.txt)");
      break;
    case "GPL 3.0":
      return (licenseType =
        "[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)");
      break;
    default:
      return (licenseType =
        "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)");
      break;
  }
}

module.exports = license;
