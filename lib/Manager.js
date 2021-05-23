const Employee = require('./Employee');

class Manager extends Employee {
    constructor(officenumber) {
        this.officenumber = officenumber;
    }
    // getrole() {
    //     return "Manager";
}


  module.exports = Manager;
