const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager')

describe('Manager', () => {
    describe('Initialization', () => {

        it("returns the Manager's name", () => {
            const manager = new Manager("steph", 1, "awesome@awesome.com", 2)
    
            expect(manager.getName()).toEqual("steph");
        })

        it("returns the Manager's ID", () => {
            const manager = new Manager("steph", 1, "awesome@awesome.com", 2)
    
            expect(manager.getId()).toEqual(1);
        })

        it("returns the Manager's Email", () => {
            const manager = new Manager("steph", 1, "awesome@awesome.com", 2)
    
            expect(manager.getEmail()).toEqual("awesome@awesome.com");
        })

        it("returns the Manager's Office Number", () => {
            const manager = new Manager("steph", 1, "awesome@awesome.com", 2)
    
            expect(manager.getOfficeNumber()).toEqual(2);
        })
    })

})

