const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
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
];

function writeToFile(fileName, answers) {
    writeFileAsync(fileName, answers).then(function(){
    }).catch(function(err){
        if (err) {
            return err;
        }
    })
}      

function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        writeToFile(generatedReadme.md, generateMarkdown(answers));
        console.log("Successfully created your readme.");
      })
      .catch((err) => {
          if (err) throw err;
      });
  };

init();
