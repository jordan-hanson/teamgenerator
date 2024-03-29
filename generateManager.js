const fs = require("fs")

function generateManager(data) {
    const html = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
        <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
    
        <title>Manager</title>
        <style>
            *,
            *::after,
            *::before {
                box-sizing: border-box;
            }
    
            html,
            body {
                padding: 0;
                margin: 0;
            }
    
            html,
            body,
            .wrapper {
                height: 100%;
            }
    
            body {
                background-color: white;
                -webkit-print-color-adjust: exact !important;
                font-family: 'Cabin', sans-serif;
            }
    
            main {
                background-color: #E9EDEE;
                height: auto;
                padding-top: 30px;
            }
    
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                font-family: 'BioRhyme', serif;
                margin: 0;
            }
    
            h2 {
                font-size: 2.5em;
            }
    
            h6 {
                font-size: 1.2em;
            }
    
            .container {
                padding: 50px;
                padding-left: 100px;
                padding-right: 100px;
            }
    
            .row {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                margin-top: 00px;
                margin-bottom: 0px;
            }
    
            .card {
                padding: 20px;
                border-radius: 6px;
                background-color: grey;
                color: white;
                margin: 20px;
            }
    
            li {
                background-color: grey;
            }
    
            .col {
                flex: 1;
                text-align: center;
            }
        </style>
    
    </head>
    
    <body>
        <div class="container">
        <div class="row">
        <div class="col m-3"></div>
        <div class="card m-3">
            <div class="card-header bg-info text-white font-weight-bold">
                <h1>${data.name}</h1>
                <h1> <i class="fas fa-mug-hot"></i>${data.title}</h1>
            </div>
            <div class="card-body bg-light" style="color: black;">
                <ul class="list-group">
                    <li class="list-group-item">Email: ${data.email}</li>
                    <li class="list-group-item">Office number: ${data.officenumber}</li>
                </ul>
            </div>
        </div>
        <div class="col m-3"></div>
        </div>
        </div>
    </body>
    
    </html>`
    fs.writeFile("manager.html", html, function (error) {
        console.log(error)
    })
}

module.exports = generateManager