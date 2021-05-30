const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Initialization', () => {

        it("shoud create an employee with all the data filled out")

        const answers = {
            name = 'Steph',
            id = '1',
            email = 'hello@awesome.com',
            role = "Employee"
        }

        const obj = new Employee(answers);

        expect(obj.answers).toEqual(answers);
    })

    //error
    it("should throw an error if not provided any values", () => {

        const cb = () => new Employee();
        const err = new Error(
            "Expected a paramater 'answers' to be filled"
        );

        expect(cb).toThrowError(err);
    })
})

//18:35.3