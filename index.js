const inquirer = require("inquirer")
const fs = require("fs")
const generateManager = require("./generateManager")
const generateEngineer = require("./generateEngineer")
const generateIntern = require("./generateIntern")

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
    // HOW CAN I PASS THIS ANSWER TO MY GENERATE HTML WHEN IT FIRES OFF MY OTHER FUNCTIONS
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
        generateManager(answer)
        console.log("my answers", answer)
    })
    console.log("ask manager questions", manager)
}

function intern() {
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
        generateIntern(answer)
        console.log("my answers", answer)
    })
    console.log("ask intern questions", intern)
}

function engineer() {
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
        generateEngineer(answer)
        console.log("my answers", answer)
    })
    console.log("ask engineer questions", engineer)
}