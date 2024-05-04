const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your application repository?"
    },
    {
      type:"input",
      message: "Write a brief decription about your application?"
    },
    {
      type:"input",
      message: "Write a brief decription about your application?"
    },
    {
      type:"input",
      message: "Write down the intallation process."
    },
    {
      type:"input",
      message: "How will your application be used?"
    },
    {
      type:"input",
      message: "What contribution did you make in the application process?"
    },
    {
      type:"input",
      message: "What are the test instructions?"
    },
    {
      type:"list",
      message: "Select the license you used for the application repository?"
      choices: []
    },


    // , Installation, Usage, Contributing, and Tests

  ])
  .then((response) =>
    console.log(colors[response.color](`Your favorite color is ${response.color}!`))
  );


  Inquirer example:

const inquirer = require("inquirer");
const colors = require("colors");
const fs = require("fs");

inquirer.prompt(
  [
    {
      type: "list",
      message: "What is your favorite color?",
      name: "colorChoice",
      choices: ["red", "blue", "green", "yellow", "cyan", "magenta"],
    },
    {
      type: "input", 
      message: "What color of all of these do you like the least?",
      name: "leastFavorite"
    }
  ]
)

  .then((response) => {

    const html = `
  <html>
    <head>
      <title>Colors!!!</title>
    </head>
    <body>
      <h1>Your favorite color is ${response.colorChoice}</h1>
      <p>Your least favorite is ${response.leastFavorite}</p>
    </body>
  </html>
    `

    fs.writeFile("index.html", html, function(err){
      if( err ) return console.log("Oooops")
      console.log("The html is ready")
    })
  });

