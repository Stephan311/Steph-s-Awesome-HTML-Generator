const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Initialization', () => {

        it("shoud create an manager with all the data filled out")

        const answers = {
            name = 'Steph',
            id = '1',
            email = 'hello@awesome.com',
            role = "Manager",
           officenumber = 2
        }

        const obj = new Manager(answers);

        expect(obj.answers).toEqual(answers);
    })

    //error
    it("should throw an error if not provided any values", () => {

        const cb = () => new Manager();
        const err = new Error(
            "Expected a paramater 'answers' to be filled"
        );

        expect(cb).toThrowError(err);
    })
})
