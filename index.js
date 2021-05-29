const fs = require("fs");
const inquirer = require("inquirer");
let renderFile = require("./lib/htmlRenderer");
const { validateEmail, validateNumbers, validateEntries } = require("./lib/validate");
const generateManager = renderFile.createManager;
const generateEngineer = renderFile.createEngineer;
const generateIntern = renderFile.createIntern;
const renderHTML = renderFile.renderMain;

function promptQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name",
        validate: validateEntries
      },
      {
        type: "number",
        message: "What is your ID?",
        name: "id",
        validate: validateNumbers
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
        validate: validateEmail
      },
      {
        type: "list",
        message: "What is your role?",
        name: "role",
        choices: ["Engineer", "Intern", "Manager"],
      },
    ])
    .then(function ({ name, id, email, role }) {
      switch (role) {
        case "Engineer":
          inquirer
            .prompt({
              type: "input",
              message: "What is your GitHub username?",
              name: "github",
              validate: validateEntries
            })
            .then(function ({ github }) {
              generateEngineer(name, id, email, github);
              addOtherMembers();
            });
          break;
        case "Intern":
          inquirer
            .prompt({
              type: "input",
              message: "What school do you attend?",
              name: "school",
              validate: validateEntries
            })
            .then(function ({ school }) {
              generateIntern(name, id, email, school);
              addOtherMembers();
            });
          break;
        case "Manager":
          inquirer
            .prompt({
              type: "input",
              message: "What is your Office Number?",
              name: "officeNumber",
              validate: validateNumbers
            })
            .then(function ({ officeNumber }) {
              generateManager(name, id, email, officeNumber);
              addOtherMembers();
            });
          break;
      }
    });
}

function addOtherMembers() {
  inquirer
    .prompt({
      type: "confirm",
      message: "Add other Team Members?",
      name: "addOtherMembers",
    })
    .then(function ({ addOtherMembers }) {
      console.log("add other members", addOtherMembers);
      if (addOtherMembers) {
        askQuestions();
      } else {
        renderHTML();
      }
    })
    .catch((err) => {
      console.log("Error adding other members", err);
      throw err;
    });
}

promptQuestions();
