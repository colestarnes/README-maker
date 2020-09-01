var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([
  {
    type: "input",
    name: "Title",
    message: "Project Title: "
  },
  {
    type: "input",
    message: "Description: ",
    name: "description",
  },  
  {
    type: "input", 
    name: "instillation",  
    message: "Instillation: "
  }, 
  {
    type: "input",
    name: "Usage", 
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
    message: "Github username: ", 
    name: "github"
  }
]).then(function(data) {

  var filename = data.name.toLowerCase().split(' ').join('') + ".json";

  fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
});
