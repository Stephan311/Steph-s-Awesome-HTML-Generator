const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Initialization', () => {

        it("shoud create an engineer with all the data filled out")

        const answers = {
            name = 'Steph',
            id = '1',
            email = 'hello@awesome.com',
            role = "Employee",
            github = 'stephan311'
        }

        const obj = new Engineer(answers);

        expect(obj.answers).toEqual(answers);
    })

    //error
    it("should throw an error if not provided any values", () => {

        const cb = () => new Engineer();
        const err = new Error(
            "Expected a paramater 'answers' to be filled"
        );

        expect(cb).toThrowError(err);
    })
})
