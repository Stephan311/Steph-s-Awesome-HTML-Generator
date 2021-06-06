const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Initialization', () => {

        it("returns the correct name", () => {
            const employee = new Employee("steph", 1, "awesome@awesome.com")

            expect(employee.getName()).toEqual("steph");
        })

    })

    
})

