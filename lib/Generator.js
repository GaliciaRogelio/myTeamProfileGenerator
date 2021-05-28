const path = require("path");
const fs = require("fs");
const Employee = require("./Employee");
const Engineer = require("./Engineer");

const SourcesDir = path.resolve(__dirname, "../src");

const render = employees => {
    const html = [];

    html.push(...employees
        .filter(Employee => employees.getRole() === "Manager")
        .map(manager => renderManager(manager))
    );

    html.push(...employees
        .filter(Employee => employees.getRole() === "Engineer")
        .map(engineer => renderEngineer(engineer))
    );

    html.push(...employees
        .filter(Employee => employees.getRole() === "Intern")
        .map(intern => renderIntern(intern))
    );
    
    return renderMain(html.join(""));
};

const renderManager = manager => {
    let source = fs.readFileSync(path.resolve(SourcesDir, "manager.html"), "utf-8");
    source = replacePlaceholders(source, "name", manager.getName());    
    source = replacePlaceholders(source, "role", manager.getRole());    
    source = replacePlaceholders(source, "email", manager.getEmail());    
    source = replacePlaceholders(source, "id", manager.getId());   
    source = replacePlaceholders(source, "officeNumber", manager.getOfficeNumber());
    return source;
};

const renderEngineer = engineer => {
    let source = fs.readFileSync(path.resolve(SourcesDir, "engineer.html"), "utf-8");
    source = replacePlaceholders(source, "name", engineer.getName());
    source = replacePlaceholders(source, "role", engineer.getRole());
    source = replacePlaceholders(source, "email", engineer.getEmail());
    source = replacePlaceholders(source, "id", engineer.getId());
    source = replacePlaceholders(source, "github", engineer.getGithub());
    return source;
};

const renderIntern = intern => {
    let source = fs.readFileSync(path.resolve(SourcesDir, "intern.html"), "utf-8");
    source = replacePlaceholders(source, "name", intern.getName());
    source = replacePlaceholders(source, "role", intern.getRole());
    source = replacePlaceholders(source, "email", intern.getEmail());
    source = replacePlaceholders(source, "id", intern.getName());
    source = replacePlaceholders(source, "school", intern.getSchool());
    return source;
};

const renderMain = html => {
    const source = fs.readFileSync(path.resolve(SourcesDir, "main.html"), "utf-8");
    return replacePlaceholders(source, "team", html);
};

const replacePlaceholders = (source, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}" , "gm");
    return template.replace(pattern, value);
};

module.exports = render;