const fs = require("fs");
const path = require("path");
const templateDir = ("./dist");
const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");

let teamMembers = ""

// Render employees
const renderManager = manager => {
    let template = fs.readFileSync(path.resolve(templateDir, "manager.html"), "utf-8");
    var managerHtml = ""
    managerHtml = managerHtml + template.replace(/{ name }/g, manager.getName())
        .replace(/{ role }/g, manager.getRole())
        .replace(/{ email }/g, manager.getEmail())
        .replace(/{ id }/g, manager.getId())
        .replace(/{ officeNumber }/, manager.getOfficeNumber())
    teamMembers = teamMembers + managerHtml;
};

const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templateDir, "engineer.html"), "utf-8");
    var engineerHtml = ""
    engineerHtml = engineerHtml + template.replace(/{ name }/g, engineer.getName())
        .replace(/{ role }/g, engineer.getRole())
        .replace(/{ email }/g, engineer.getEmail())
        .replace(/{ id }/g, engineer.getId())
        .replace(/{ github }/g, engineer.getGithub())
    teamMembers = teamMembers + engineerHtml;
};

const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve(templateDir, "intern.html"), "utf-8");
    var internHtml = ""
    internHtml = internHtml + template.replace(/{ name }/g, intern.getName())
        .replace(/{ role }/g, intern.getRole())
        .replace(/{ email }/g, intern.getEmail())
        .replace(/{ id }/g, intern.getId())
        .replace(/{ school }/g, intern.getSchool())
    teamMembers = teamMembers + internHtml;
};



// Functions to create each new Constructor
function createManager(name, id, email, officeNumber) {
    const manager = new Manager(name, id, email, officeNumber)
    renderManager(manager)
};

function createEngineer(name, id, email, github) {
    const engineer = new Engineer(name, id, email, github)
    renderEngineer(engineer)
};

function createIntern(name, id, email, school) {
    const intern = new Intern(name, id, email, school)
    renderIntern(intern)
};

function renderMain() {
    let mainTemplate = fs.readFileSync(path.resolve(templateDir, "main.html"), "utf-8");
    var mainHtml = ""
    mainHtml = mainHtml + mainTemplate.replace(/{ team }/g, teamMembers)
    let file = path.join(__dirname, "/template.html");
    fs.writeFile(file, mainHtml, function (err) {
        if (err) {
            throw new Error(err)
        }
        console.log('Employee Successfully created!');
    });
};

module.exports = {
    createManager: createManager,
    createEngineer: createEngineer,
    createIntern: createIntern,
    renderMain: renderMain
};