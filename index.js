const inquirer = require("inquirer")
const generateManager = require("./generateManager")
const generateEngineer = require("./generateEngineer")
const generateIntern = require("./generateIntern")
const teamMembers = []
const generateTeam = require("./generateTeam")

main();
function main() {
    inquirer.prompt({
        name: "employeetype",
        type: "list",
        choices: [
            "Manager", "Engineer", "Intern"
        ],
        message: "What type of employee do you want to make?"
    }).then(function (answer) {
        if (answer.employeetype === "Engineer") {
            engineer(answer)
        } else if (answer.employeetype === "Intern") {
            intern(answer)
        } else {
            manager(answer)
        }
    })
}

function manager(answer) {
    let title = answer
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
        let data = {
            name: answers.name,
            email: answers.email,
            officenumber: answers.officenumber,
            title: title.employeetype
        }
        if (answers.add === 'yes') {
            console.log("this is data", data)
            teamMembers.push(data)
            generateManager(data)
            main()
        } else {
            teamMembers.push(data)
            generateManager(data)
            generateTeam(teamMembers)
            console.log("this is my array data", teamMembers)
        }
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
        let data = {
            name: answers.name,
            email: answers.email,
            school: answers.school,
            title: title.employeetype
        }
        if (answers.add === 'yes') {
            console.log("this is data", data)
            teamMembers.push(data)
            generateIntern(data)
            main()
        } else {
            teamMembers.push(data)
            generateIntern(data)
            generateTeam(teamMembers)
            console.log("my answers", answer)
        }
    })
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
        let data = {
            name: answers.name,
            email: answers.email,
            username: answers.username,
            title: title.employeetype
        }
        if (answers.add === 'yes') {
            console.log("this is data", data)
            teamMembers.push(data)
            generateEngineer(data)
            main()
        } else {
            teamMembers.push(data)
            generateEngineer(data)
            generateTeam(teamMembers)
            console.log("my answers", data)
            console.log("this is my array data", teamMembers)

        }
    })
}