const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your application repository?",
      name:"title"
    },
    {
      type:"input",
      message: "Write a brief decription about your application?",
      name: "discription"
    },
    {
      type:"input",
      message: "Write down the intallation process.",
      name: "installation"
    },
    {
      type:"input",
      message: "How will your application be used?",
      name: "usage"
    },
    {
      type:"input",
      message: "What contribution did you make in the application process?",
      name:"contribution"
    },
    {
      type:"input",
      message: "What are the test instructions?",
      name: "test"
    },
    {
      type:"list",
      message: "Select the license you used for the application repository?",
      name: "License",
      choices: [ 
        "GNU general Public License v3.0", 
        "Apache License 2.0",
        "MIT License", 
        "BSD 2-Clause 'Simplified License'", 
        "BSD 3-Clause 'New'or 'revised' license", 
        "Boost Software License 1.0", 
        "Creative Commons Zero v1.0 Universal", 
        "Eclipse Public License 2.0" 
      ]
    }
  ])
  
  .then((response) => {

    const readme = `#${response.title}
     ${response.description}
     ## installation
     ${response.inallation}
     ## Usage
     ${response.usage} 
     ## contribution
     ${response.contribution}
     ##Tests
     ${response.test}
     ##Lincense
     ${response.lincense}`;
  
    fs.writeFile("README.md", readme, (err) => {
      if( err ) {
      console.log("Error writing README file:", err);
    } else {
      console.log("README file created succesfuly!");
    }
  });
 });

