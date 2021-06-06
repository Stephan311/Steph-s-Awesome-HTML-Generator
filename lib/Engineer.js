const Employee = require("./Employee");

//extend employee
class Engineer extends Employee {

    constructor(name, id, email, github) {
        super(name, id, email) 
        this.github = github
    }

    getGithub() {
        return this.github;
    }
    
    
    }
    // const employee = new Employee("steph", 1, "awesome@awesome.com")
    // const engineer = new Engineer("Stephan311");
    // console.log(engineer)


module.exports = Engineer;


