const fs = require("fs")

function generateEngineer(data) {
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
            <div class="card">
                <div class="col">
                    <h2>
                        ${data.name}
                    </h2>
                </div>
                <div class="row justify-content-md-center">
                    <div class="col-m-4"></div>
                    <div class="col-m-4">
                        <svg class="bi bi-briefcase" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M0 12.5A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-6h-1v6a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-6H0v6z"
                                clip-rule="evenodd" />
                            <path fill-rule="evenodd"
                                d="M0 4.5A1.5 1.5 0 011.5 3h13A1.5 1.5 0 0116 4.5v2.384l-7.614 2.03a1.5 1.5 0 01-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 00-.5.5v1.616l6.871 1.832a.5.5 0 00.258 0L15 6.116V4.5a.5.5 0 00-.5-.5h-13zM5 2.5A1.5 1.5 0 016.5 1h3A1.5 1.5 0 0111 2.5V3h-1v-.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5V3H5v-.5z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                    <h6 class="col-m-4">
                        ${data.title}
                    </h6>
                    <div class="col-m-4"></div>
                </div>
                <div class="card-body" style="color: black;">
                    <ul class="list-group">
                        <li class="list-group-item">ID:</li>
                        <li class="list-group-item">Email: ${data.email}</li>
                        <li class="list-group-item">Office number: ${data.username}</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    </body>
    
    </html>`
    fs.writeFile("engineer.html", html, function (error) {
        console.log(error)
    })
}

module.exports = generateEngineer