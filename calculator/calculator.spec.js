const { add } = require('./calculator.js');

// test away!

describe("calculator.js", () => {

    describe("add()", () => {
        // should add two numbers
        test("should add two numbers", () => {
            const sum = add(2, 2);

            // assertions
            expect(sum).toBe(4);
            expect(add(2, -2)).toBe(0);
            // expect(add()).toBe(0);
        })

        it("should return the value if invoked with only one argument", () => {
            expect(add(2)).toBe(2);
            expect(add(0)).toBe(0);
            expect(add(-1)).toBe(-1);
        })

        it("should return - if called with no arguments", () => {

        })

        test.todo("passing single argument");
        test.todo("passing no arguments")
        test.todo("passing object")
        test.todo("passing strings")
        test.todo("passing arrays")

    })
    describe("multiply()", () => {
        it("should return 0 if called with no arguments", () => {
            // Arrange - setup
            const input = 0;

            //Act - execute the code under test
            const result = add();

            //Assert - check your assumptions are correct
            expect(result).toBe(0)
        })
    })
})

