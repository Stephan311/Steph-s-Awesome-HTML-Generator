const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee')

describe('Engineer', () => {
    describe('Initialization', () => {

        it("returns the engineer's name", () => {
            const engineer = new Engineer("steph", 1, "awesome@awesome.com", "Stephan311")
    
            expect(engineer.getName()).toEqual("steph");
        })

        it("returns the engineer's ID", () => {
            const engineer = new Engineer("steph", 1, "awesome@awesome.com", "Stephan311")
    
            expect(engineer.getId()).toEqual(1);
        })

        it("returns the engineer's Email", () => {
            const engineer = new Engineer("steph", 1, "awesome@awesome.com", "Stephan311")
    
            expect(engineer.getEmail()).toEqual("awesome@awesome.com");
        })

        it("returns the engineer's Github", () => {
            const engineer = new Engineer("steph", 1, "awesome@awesome.com", "Stephan311")
    
            expect(engineer.getGithub()).toEqual("Stephan311");
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
