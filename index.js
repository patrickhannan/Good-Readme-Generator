const inquirer = require("inquirer");

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
          },
          {
            type: "input",
            name: "descriotion",
            message: "Describe your project"
          },
          {
            type: "input",
            name: "installation",
            message: "How does the user install your application?"
          },
          {
            type: "input",
            name: "usage",
            message: "How can this application be used?"
          },
          {
            type: "list",
            choices: [
            "MIT",
            "ISC",
            "GPL-3.0",
            ],
            name: "license",
            message: "What project license will you use?",
          },
          {
            type: "input",
            name: "contribution",
            message: "How can others contribute to this project."
          },
          {
            type: "input",
            name: "tests",
            message: "Enter any testing information for your application."
          },
          {
            type: "input",
            name: "github",
            message: "Enter your github username."
          },
          {
            type: "input",
            name: "email",
            message: "Enter your email address."
          },
    ]);
}
