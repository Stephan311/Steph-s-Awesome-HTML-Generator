const Employee = require("./Employee");

//extend employee
class Engineer extends Employee {

    constructor(github) {
        this.github = github
    }
    
    getGithub(){}
    getRole(){
        return "Engineer"
    }
}

module.exports = Employee;