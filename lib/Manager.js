const Employee = require('./Employee');

class Manager extends Employee {
    constructor(officenumber){
        this.officenumgetber = officenumber;
    }
    // getrole() {
    //     return "Manager";
    }

    module.exports = Manager;
