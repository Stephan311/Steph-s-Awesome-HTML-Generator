const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateHTML = require('../src/generateHTML')
const Employee = require('./Employee')

//make list of employees a multiple choice questions
//depending on the question picked, make a .then to take the answer and run a function for each position
//add seperate function to ask if you want to add a team member

const addMember = () => {
  return inquirer.prompt([
    {
      type: 'list',
      message: "Do you want to add another team member?",
      name: 'anotherone',
      choices: ["yes", "no"],
    }
  ]).then((team) => {
    if (team.anotherone = "yes") {
      promptUser()
    } else {
     console.log("Hello")
    }
  });
}



function promptUser() {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'What posiion is this team member?',
            name: 'Position',
            choices: ["Manager", "Engineer", "Intern"],
            validate: (answer)=>{ if(answer){return true} else {return 'Please enter an answer before proceeding'}}
        }
    ]).then((answers) => {
      if (answers.Position === "Manager") {
        addManager()
      } else if (answers.Position === "Engineer") {
       addEngineer()
      } else {
        addIntern()
      }
    })

    //functions for giving questions for different team members

    function addManager() {
      return inquirer.prompt ([
        {
          type: "input",
          name: "name",
          message: "What is your name?"

        },
        {
          type: "input",
          name: "ID",
          message: "What is your ID?"

        },
        {
          type: "input",
          name: "Email",
          message: "What is your Email?"

        },
        {
          type: 'input',
          name: 'managerP',
          message: 'What is your Office Number?'
        }

      ])
    }

    function addEngineer() {
      return inquirer.prompt ([
        {
          type: "input",
          name: "name",
          message: "What is your name?"

        },
        {
          type: "input",
          name: "ID",
          message: "What is your ID?"

        },
        {
          type: "input",
          name: "Email",
          message: "What is your Email?"

        },
        {
          type: 'input',
          name: 'Github',
          message: 'What is your Github?'
        }

      ])
    }

    function addIntern() {
      return inquirer.prompt ([
        {
          type: "input",
          name: "name",
          message: "What is your name?"

        },
        {
          type: "input",
          name: "ID",
          message: "What is your ID?"

        },
        {
          type: "input",
          name: "Email",
          message: "What is your Email?"

        },
        {
          type: 'school',
          name: 'managerP',
          message: 'What is your School?'
        }

      ])
    }


    
    // .then((answers) => {
    //     const filename =  `${answers.name.toLowerCase().split(' ').join('')}.html`;
    //     fs.writeFile(filename, generateHTML(answers), (err) =>
    //     err? console.log(err) : console.log("README has been created! Check it out!"))
    
    // })
    };


    
    addMember()
  