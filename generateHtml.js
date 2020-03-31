const fs = require("fs")

function generateHtml(data) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h1>My name is ${data.name}</h1>
</body>
</html>`
    fs.writeFile("manager.html", html, function (error) {
        console.log(error)
    })
}

module.exports = generateHtml