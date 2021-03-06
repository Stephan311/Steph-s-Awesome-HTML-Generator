const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateHTML = require('../src/generateHTML')
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');

const managerArray = [];

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
      console.log(managerArray)
      fs.writeFile('./team.html', generateHTML(managerArray), (err) => {
        err ? console.log(err) : console.log("HTML has been created")
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
      message: 'What posiion is this team member? *If first time entering, choose to add a manager first unless program will not work.',
      name: 'Position',
      choices: ["Manager", "Engineer", "Intern", "Employee"],
      validate: (answer) => { if (answer) { return true } else { return 'Please enter an answer before proceeding' } }
    }
  ]).then((answers) => {
    if (answers.Position === "Manager") {
      addManager()
    } else if (answers.Position === "Engineer") {
      addEngineer()
    }
    else if (answers.Position === "Employee") {
      addEmployee()
    } else {
      addIntern()
    }
  })
}

//functions for giving questions for different team members

function addManager() {
  return inquirer.prompt([
    {
      type: "input",
      name: "role",
      message: "To confirm your role, type 'Manager'",
      validate: (answer) => { if (answer === "Manager") { return true } else { return 'Please type correct position before proceeding, or hit ctrl + c to escape and restart' } }

    },
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
    // console.log(answers);
    managerArray.push(answers);
    console.log(managerArray);



    addMember();
  })
}

function addEmployee() {
  return inquirer.prompt([
    {
      type: "input",
      name: "role",
      message: "To confirm your role, type 'Employee'",
      validate: (answer) => { if (answer === "Employee") { return true } else { return 'Please type correct position before proceeding, or hit ctrl + c to escape and restart' } }

    },
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

    }

  ]).then((answers) => {
    // console.log(answers);
    managerArray.push(answers);
    console.log(managerArray);



    addMember();
  })
}

function addEngineer() {
  return inquirer.prompt([
    {
      type: "input",
      name: "role",
      message: "To confirm your role, type 'Engineer'",
      validate: (answer) => { if (answer === "Engineer") { return true } else { return 'Please type correct position before proceeding, or hit ctrl + c to escape and restart' } }

    },
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
    // console.log(answers);
    managerArray.push(answers);
    console.log(managerArray);



    addMember();
  })
}

function addIntern() {
  return inquirer.prompt([
    {
      type: "input",
      name: "role",
      message: "To confirm your role, type 'Intern'",
      validate: (answer) => { if (answer === "Intern") { return true } else { return 'Please type correct position before proceeding, or hit ctrl + c to escape and restart' } }

    },
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
      name: 'school',
      message: 'What is your School?'
    }

  ]).then((answers) => {
    // console.log(answers);
    managerArray.push(answers);
    console.log(managerArray);



    addMember();
  })
}

//push all functions into classes

// function pushClasses() {
  
//   Employee.push(addEmployee)
//   Manager.push(addManager)
//   Engineer.push(addEngineer)
//   Intern.push(addIntern)

// // }

// pushClasses();



addMember()