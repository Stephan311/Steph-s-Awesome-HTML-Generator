const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Initialization', () => {

        it("shoud create an intern with all the data filled out")

        const answers = {
            name = 'Steph',
            id = '1',
            email = 'hello@awesome.com',
            role = "Intern",
            school = 'Carelton'
        }

        const obj = new Intern(answers);

        expect(obj.answers).toEqual(answers);
    })

    //error
    it("should throw an error if not provided any values", () => {

        const cb = () => new Intern();
        const err = new Error(
            "Expected a paramater 'answers' to be filled"
        );

        expect(cb).toThrowError(err);
    })
})
