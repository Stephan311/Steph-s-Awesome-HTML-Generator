const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateHTML = require('../src/generateHTML')
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Manager = require('./Manager');
const Intern = require('./Intern');

const teamArray = [];
const positionArray = [];

//make list of employees a multiple choice questions
//depending on the question picked, make a .then to take the answer and run a function for each position
//add seperate function to ask if you want to add a team member

//asks user if they want to add a member
const addMember = () => {
  return inquirer.prompt([
    {
      type: 'list',
      message: "Do you want to add another team member?",
      name: 'anotherone',
      choices: ["yes", "no"],
    }
  ]).then((team) => {
    // console.log(team);
    if (team.anotherone === "yes") {
      promptUser()
    } else {
      fs.writeFile('./team.html', generateHTML(teamArray), (err) => {
        err ? console.log(err) : console.log("HTML has been created")
        createObjects()
      });
    }
  });
}

//add all positiions into one array

//asks user what position the member is
function promptUser() {
  return inquirer.prompt([
    {
      type: 'list',
      message: 'What posiion is this team member?',
      name: 'Position',
      choices: ["Manager", "Engineer", "Intern"],
      validate: (answer) => { if (answer) { return true } else { return 'Please enter an answer before proceeding' } }
    }
  ]).then((answers) => {
    console.log(answers.Position);
    if (answers.Position === "Manager") {
      addManager()
    } else if (answers.Position === "Engineer") {
      addEngineer()
    } else {
      addIntern()
    }
  }).then((answers) => {
    // console.log(answers);
    positionArray.push(answers);
  });



//functions for giving questions for different team members

function addManager() {
  return inquirer.prompt([
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

  ]).then((answers) => {
    createObjects(answers); 

    addMember();
  })
}

function addEngineer() {
  return inquirer.prompt([
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

  ]).then((answers) => {
    createObjects(answers); 



    addMember();
  })
}

function addIntern() {
  return inquirer.prompt([
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
      name: 'school',
      message: 'What is your School?'
    }

  ]).then((answers) => {
    createObjects(answers);  


    addMember();
  })
}

//objects/classes get created so the correct data goes in the correct objects

function createObjects(answers) {
  if (answers.Position === "Manager") {
    const newManager = new Manager(answers.name, answers.ID, answers.email, answers.managerP)
    console.log(newManager)
  } else if (answers.Position === "Engineer"){
    const newEngineer = new Engineer(answers.name, answers.ID, answers.email, answers.Github)
    console.log(newEngineer);
    } else if (answers.Position === "Employee") {
    const newEmployee = new Employee(answers.name, answers.ID, answers.Email, answers.role)
    console.log(newEmployee);
    } else {
      const newIntern = new Intern(answers.name, answers.ID, answers.Email, answers.school)
      console.log(newIntern);
    }
    
}


}





addMember()
