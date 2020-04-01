const fs = require("fs")

function generateTeam(team) {
    var cardHtmls = []
    for (var i = 0; i < team.length; i++) {
        var id = i
        if (team[i].title === "manager") {
            var managerCard = `<div class="card-body" style="color: black;">
        <ul class="list-group">
            <li class="list-group-item">ID:${id++}</li>
            <li class="list-group-item">Email: ${team[i].email}</li>
            <li class="list-group-item">Office number: ${team[i].officenumber}</li>
        </ul>
    </div>`
            cardHtmls.push(managerCard)
        } else if (team[i].title === "intern") {
            var internCard = `<div class="card-body" style="color: black;">
        <ul class="list-group">
        <li class="list-group-item">ID:${id++}</li>
        <li class="list-group-item">Email: ${team[i].email}</li>
        <li class="list-group-item">School: ${team[i].school}</li>
        </ul>
        </div>`
            cardHtmls.push(internCard)
        } else if (team[i].title === "engineer") {
            var engineerCard = `<div class="card-body" style="color: black;">
        <ul class="list-group">
        <li class="list-group-item">ID:${id++}</li>
        <li class="list-group-item">Email: ${team[i].email}</li>
        <li class="list-group-item"> Username: ${team[i].username}</li>
        </ul>
        </div>`
            cardHtmls.push(engineerCard)
        }

    }


    const html = `<!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
 </head>
 <body>
  <h1>My name is </h1>
  ${cardHtmls}
 </body>
 </html>`
    console.log("this is team data", team)
    fs.writeFile("team.html", html, function (error) {
        console.log(error)
    })

}

module.exports = generateTeam 