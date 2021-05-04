
//

class Employee {
    //should include: name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()—returns 'Employee'

constructor(name, id, email, role) {
    this.name = name
    this.id = id;
    this.email = email;
    this.role = role;
}

// getName(){
//     return this.name;
// }
// getId(){}
// getEmail(){}
// getRole(){
//     return 'Employee'
// }

}
// // answers.name inside class definition
// var employee = new Employee("CEO", "imcool")
// var employee2 = new Employee("Steph", "CEO", "ss")
// console.log(employee);
// console.log(employee.getName())
// console.log(employee2.getName())


module.exports = Employee;