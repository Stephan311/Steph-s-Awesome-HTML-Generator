const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateHTML = require('../src/generateHTML')
const Employee = require('./Employee')

//make list of employees a multiple choice questions
//depending on the question picked, make a .then to take the answer and run a function for each position
//



const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: (answer)=>{ if(answer){return true} else {return 'Please enter an answer before proceeding'}}
          },
          {
            type: 'list',
            message: 'What posiion is this team member?',
            name: 'Position',
            choices: ["Manager"],
            validate: (answer)=>{ if(answer){return true} else {return 'Please enter an answer before proceeding'}}
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
            validate: (answer)=>{ if(answer){return true} else {return 'Please enter an answer before proceeding'}}
          },
          {
            type: 'input',
            name: 'githubname',
            message: 'What is your github username?',
            validate: (answer)=>{ if(answer){return true} else {return 'Please enter an answer before proceeding'}}
          }

    ])



    
    // .then((answers) => {
    //     const filename =  `${answers.name.toLowerCase().split(' ').join('')}.html`;
    //     fs.writeFile(filename, generateHTML(answers), (err) =>
    //     err? console.log(err) : console.log("README has been created! Check it out!"))
    
    // })
    };

    function askToAddMember() {
      inquirer
      .prompt([
        {
          type: "confirm",
          name: 'choice',
          message: "Add another team member?"
        }
      ]).then(answers => {
        if (answers.chioice) {
          this.promptUser()
        } else {
          generateHTML()
        }
      })
    }
    
    promptUser()
    askToAddMember()