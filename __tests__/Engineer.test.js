const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee')

describe('Engineer', () => {
    describe('Initialization', () => {

        it("returns the engineer's name", () => {
            const engineer = new Engineer("steph", 1, "awesome@awesome.com", "Stephan311")
    
            expect(engineer.getName()).toEqual("steph");
        })
     
    })

    //error
    // it("should throw an error if not provided any values", () => {

    //     const cb = () => new Engineer();
    //     const err = new Error(
    //         "Expected a paramater 'answers' to be filled"
    //     );

    //     expect(cb).toThrowError(err);
    // })
})
