const inquirer = require('inquirer');
const fs = require('fs');


const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
          },
          {
            type: 'input',
            name: 'position',
            message: 'What is your position?',
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
          },
          {
            type: 'input',
            name: 'name',
            message: 'What is your github username?',
          },
    ]).then((answers) => {
        const filename =  `${answers.name.toLowerCase().split(' ').join('')}.html`;
        fs.writeFile(filename, promptUser(answers), (err) =>
        err? console.log(err) : console.log("README has been created! Check it out!"))
    
    })
    };
    
    promptUser()