const inquirer = require("inquirer")
const fs = require("fs")
const generateManager = require("./generateManager")
const generateEngineer = require("./generateEngineer")
const generateIntern = require("./generateIntern")
let teamMembers = []
const generateTeam = require("./generateTeam")

main();
function main() {
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
            engineer(answer)
        } else if (answer.employeetype === "intern") {
            intern(answer)
        } else {
            manager(answer)
        }
        // HOW CAN I PASS THIS ANSWER TO MY GENERATE HTML WHEN IT FIRES OFF MY OTHER FUNCTIONS
    })
}

function manager(answer) {
    let title = answer
    console.log("this is my main answer", title)
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
    },
    {
        name: "add",
        type: "list",
        message: "Do you want to add another employee?",
        choices: [
            'yes',
            'no'
        ]
    }]).then(function (answers) {
        let data = [title, answers]
        data.title = title.employeetype
        data.name = answers.name
        data.email = answers.email
        data.officenumber = answers.officenumber

        let teamData = {
            name: answers.name,
            email: answers.email,
            officenumber: answers.officenumber,
            title: title.employeetype
        }
        if (answers.add === 'yes') {
            console.log("this is data", data)
            teamMembers.push(teamData)
            generateManager(data)
            main()
        } else {
            teamMembers.push(teamData)
            generateManager(data)
            generateTeam(teamMembers)
        }
        console.log("this is manager answers", answers)
    })
}


function intern(answer) {
    let title = answer
    console.log("this is my main answer", title)
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
        name: "school",
        type: "input",
        message: "What school are you enrolled in right now?"
    },
    {
        name: "add",
        type: "list",
        message: "Do you want to add another employee?",
        choices: [
            'yes',
            'no'
        ]
    },
    ]).then(function (answers) {
        let data = [title, answers]
        data.title = title.employeetype
        data.name = answers.name
        data.email = answers.email
        data.school = answers.school

        let teamData = {
            name: answers.name,
            email: answers.email,
            school: answers.school,
            title: title.employeetype
        }
        if (answers.add === 'yes') {
            console.log("this is data", data)
            teamMembers.push(teamData)
            generateIntern(data)
            main()
        } else {
            teamMembers.push(teamData)
            generateIntern(answer)
            generateTeam(teamMembers)
            console.log("my answers", answer)
        }
    })
    console.log("ask intern questions", intern)
}

function engineer(answer) {
    let title = answer
    console.log("this is my main answer", title)
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
        name: "username",
        type: "input",
        message: "What is your GitHub username?"
    },
    {
        name: "add",
        type: "list",
        message: "Do you want to add another employee?",
        choices: [
            'yes',
            'no'
        ]
    }
    ]).then(function (answers) {
        let data = [title, answers]
        data.title = title.employeetype
        data.name = answers.name
        data.email = answers.email
        data.username = answers.username

        let teamData = {
            name: answers.name,
            email: answers.email,
            username: answers.username,
            title: title.employeetype
        }
        if (answers.add === 'yes') {
            console.log("this is data", data)
            teamMembers.push(teamData)
            generateEngineer(data)
            main()
        } else {
            teamMembers.push(teamData)
            generateEngineer(data)
            generateTeam(teamMembers)
            console.log("my answers", data)
        }
    })
    console.log("ask engineer questions", engineer)
}