const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern')

describe('Intern', () => {
    describe('Initialization', () => {

        it("returns the Intern's name", () => {
            const intern = new Intern("steph", 1, "awesome@awesome.com", "Carelton")
    
            expect(intern.getName()).toEqual("steph");
        })
     
    })

})
