const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Initialization', () => {

        it("returns the correct name", () => {
            const employee = new Employee("steph", 1, "awesome@awesome.com")

            expect(employee.getName()).toEqual("steph");
        })

        it("returns the correct ID", () => {
            const employee = new Employee("steph", 1, "awesome@awesome.com")

            expect(employee.getId()).toEqual(1);
        })

        it("returns the correct Email", () => {
            const employee = new Employee("steph", 1, "awesome@awesome.com")

            expect(employee.getEmail()).toEqual("awesome@awesome.com");
        })


    })

    
})

