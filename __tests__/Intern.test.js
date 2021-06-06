const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern')

describe('Intern', () => {
    describe('Initialization', () => {

        it("returns the Intern's name", () => {
            const intern = new Intern("steph", 1, "awesome@awesome.com", "Carelton")
    
            expect(intern.getName()).toEqual("steph");
        })

        it("returns the Intern's Id", () => {
            const intern = new Intern("steph", 1, "awesome@awesome.com", "Carelton")
    
            expect(intern.getId()).toEqual(1);
        })

        it("returns the Intern's Email", () => {
            const intern = new Intern("steph", 1, "awesome@awesome.com", "Carelton")
    
            expect(intern.getEmail()).toEqual("awesome@awesome.com");
        })

        it("returns the Intern's School", () => {
            const intern = new Intern("steph", 1, "awesome@awesome.com", "Carelton")
    
            expect(intern.getSchool()).toEqual("Carelton");
        })


        
     
    })

})
