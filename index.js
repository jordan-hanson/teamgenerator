const inquirer = require("inquirer")
const fs = require("fs")
const generateHtml = require("./generateHtml")

inquirer.prompt({
    name: "employeetype",
    type: "list",
    choices: [
        "manager", "engineer", "intern"
    ],
    message: "What type of employee do you want to make?"
}).then(function (answer) {
    console.log(answer)
    if (answer.employeetype === "engineer") {
        engineer()
    } else if (answer.employeetype === "intern") {
        intern()
    } else {
        manager()
    }
})

function manager() {
    inquirer.prompt([{
        name: "name",
        type: "input",
        message: "What is your name?"
    },
    {
        name: "email",
        type: "input",
        message: "What is your email?"
    },
    {
        name: "officenumber",
        type: "input",
        message: "What is your office number?"
    }
    ]).then(function (answer) {
        generateHtml(answer)
        console.log("my answers", answer)
    })
    console.log("ask manager questions", manager)
}

function intern() {
    console.log("ask intern questions", intern)
}

function engineer() {
    console.log("ask engineer questions", engineer)
}