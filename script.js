var inquirer = require("inquirer");
var fs = require('fs');  
var util = require('util'); 


console.clear();  

function promptUser() {
  return inquirer.prompt([
  {
    type: "input",
    message: "Github username: ",
    name: "github"
  },
  {
    type: "input",
    name: "title",
    message: "Project Title: "
  },
  {
    type: "input",
    message: "Description: ",
    name: "description",
  },
  {
    type: "input",
    name: "installation",
    message: "Installation: "
  },
  {
    type: "input",
    name: "usage",
    message: "Usage: "
  },
  {
    type: "list",
    message: "License: ",
    name: "license",
    choices: [
      "BSD",
      "MIT",
      "GPL"
    ]
  },
  {
    type: "input",
    message: "Who contributed? ",
    name: "contributing"
  },
  {
    type: "input",
    message: "Test(s): ",
    name: "tests"
  },

  {
    type: "input", 
    message: "Email address: ", 
    name: "email"
  }
  ])

};

function generateMarkdown(response) {
console.clear();
return ` # ${response.title} 

# Table of Contents 
- [Description](#description) 
- [Installation](#installation)  
- [Usage](#usage) 
- [Contributing](#contributing) 
- [Test(s)](#tests) 
- [Questions](#questions)

## Description 
License: ${response.license}
${response.description}

## Installation 
${response.installation}

## Usage 
${response.usage}

## Contributing
${response.contributing}

## Test(s) 
${response.tests}
 
## Questions? 
[Github Profile](https://github.com/${response.github}) 
Send me an email for additional questions: ${response.email}

`; 
}

async function init() {
  try {
const response = await promptUser(); 

const readMe = generateMarkdown(response); //try "response" instead of "data"

await fs.writeFileSync("README.md", readMe); 
console.log("Success!");
  } catch (err) {
    console.log(err);
  }
} 

init();
