const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateHTML = require('../src/generateHTML')
const Employee = require('./Employee')



const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: (answer)=>{ if(answer){return true} else {return 'Please enter an answer before proceeding'}}
          },
          {
            type: 'input',
            name: 'position',
            message: 'What is your position?',
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
            name: 'name',
            message: 'What is your github username?',
            validate: (answer)=>{ if(answer){return true} else {return 'Please enter an answer before proceeding'}}
          },
    ]).then((answers) => {
        const filename =  `${answers.name.toLowerCase().split(' ').join('')}.html`;
        fs.writeFile(filename, generateHTML(answers), (err) =>
        err? console.log(err) : console.log("README has been created! Check it out!"))
    
    })
    };
    
    promptUser()

    module.exports = promptUser;